import React, { useState, useEffect } from "react";
import { Table, Button, Space, Tag, Avatar, Popover, AutoComplete } from "antd";
// import ReactHtmlParser from "react-html-parser";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import FormEditProject from "../../components/Forms/FormEditProject";
import { Popconfirm, message } from "antd";
import { NavLink } from "react-router-dom";

export default function ProjectManagement(props) {
  // lấy dữ liệu từ reducer về component
  const projectList = useSelector(
    (state) => state.ProjectCyberBugsReducer.projectList
  );

  const { userSearch } = useSelector((state) => state.UserLoginJiraReducer);

  const [value, setValue] = useState("");

  // sử dụng useDispatch để gọi action
  const dispatch = useDispatch();

  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });

  useEffect(() => {
    dispatch({ type: "GET_LIST_PROJECT_SAGA" });
  }, []);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  const clearFilters = () => {
    setState({ filteredInfo: null });
  };

  const clearAll = () => {
    setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };
  const setAgeSort = () => {
    setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age",
      },
    });
  };
  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      sorter: (item2, item1) => {
        return item2.id - item1.id;
      },
      sortDirections: ["descend"],
    },
    {
      title: "projectName",
      dataIndex: "projectName",
      key: "projectName",
      render:(text,record,index)=>{
          return <NavLink to={`/projectdetail/${record.id}`}>{text}</NavLink>;
      },
      sorter: (item2, item1) => {
        let projectName1 = item1.projectName?.trim().toLowerCase();
        let projectName2 = item2.projectName?.trim().toLowerCase();
        if (projectName2 < projectName1) {
          return -1;
        }
        return 1;
      },
      sortDirections: ["descend"],
    },
    {
      title: "category",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Creator",
      key: "caretor",
      render: (text, record, index) => {
        return (
          <Tag color="green" className="btn btn-danger">
            {record.creator?.name}
          </Tag>
        );
      },
    },
    {
      title: "members",
      key: "members",
      render: (text, record, index) => {
        return (
          <div>
            {record.members?.slice(0, 3).map((member, index) => {
              return <Avatar key={index} src={member.avatar} />;
            })}
            {/* dùng toán tử 3 ngôi */}
            {record.members?.length > 3 ? <Avatar>...</Avatar> : ""}

            <Popover
              placement="topLeft"
              title={"Add user"}
              content={() => {
                return (
                  <AutoComplete
                    options={userSearch?.map((user, index) => {
                      return {
                        label: user.name,
                        value: user.userId.toString(),
                      };
                    })}
                    value={value}
                    onChange={(text) => {
                      setValue(text);
                    }}
                    onSelect={(valueSelect, option) => {
                      setValue(option.label);
                      dispatch({
                        type: "ADD_USER_PROJECT_API",
                        userProject: {
                          'projectId': record.id,
                          'userId': valueSelect,
                        },
                      });
                    }}
                    style={{ width: "100%" }}
                    onSearch={(value) => {
                      dispatch({ type: "GET_USER_API", keyWord: value });
                    }}
                  />
                );
              }}
              trigger="click"
            >
              <Button className="ml-2">+</Button>
            </Popover>
          </div>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record, index) => {
        return (
          <div>
            <button
              className="btn mr-2 btn-info"
              onClick={() => {
                const aciton = {
                  type: "OPEN_FORM_EDIT_PROJECT",
                  Component: <FormEditProject />,
                };
                // dispatch lên reducer nộng dung drawer
                dispatch(aciton);

                // dispatch dữ liệu hiện tại lên reducer
                const actionEditProject = {
                  type: "EDIT_PROJECT",
                  projectEditModel: record,
                };
                dispatch(actionEditProject);
              }}
            >
              <EditOutlined style={{ fontSize: 17 }} />
            </button>
            <Popconfirm
              title="Are you sure to delete this project?"
              onConfirm={() => {
                dispatch({
                  type: "DELETE_PROJECT_SAGA",
                  idProject: record.id,
                });
              }}
              okText="Yes"
              cancelText="No"
            >
              <button className="btn btn-danger mr-2">
                <DeleteOutlined />
              </button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <div className="container mt-5">
      <h3>Project Management</h3>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table
        columns={columns}
        rowKey={"id"}
        dataSource={projectList}
        onChange={handleChange}
      />
    </div>
  );
}

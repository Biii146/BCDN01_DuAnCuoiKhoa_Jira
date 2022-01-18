import React, { useState, useEffect, } from "react";
import { Table, Button, Space, Tag } from "antd";
// import ReactHtmlParser from "react-html-parser";
import {DeleteOutlined, EditOutlined, } from '@ant-design/icons'
import { useSelector, useDispatch } from "react-redux";
import FormEditProject from "../../components/Forms/FormEditProject";



export default function ProjectManagement(props) {

  // lấy dữ liệu từ reducer về component
  const projectList = useSelector((state) => state.ProjectCyberBugsReducer.projectList);

  // sử dụng useDispatch để gọi action  
  const dispatch = useDispatch();

  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });

  useEffect(()=>{
    dispatch({ type: "GET_LIST_PROJECT_SAGA" });
  },[])

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
      sorter: (item2,item1)=>{
          return item2.id - item1.id;
      },
      sortDirections: ['descend']
    },
    {
      title: "projectName",
      dataIndex: "projectName",
      key: "projectName",
      sorter:(item2,item1)=>{
        let projectName1 = item1.projectName?.trim().toLowerCase();
        let projectName2 = item2.projectName?.trim().toLowerCase();
        if(projectName2 < projectName1){
          return -1;
        }
        return 1;
      },
      sortDirections: ['descend']
    },
    {
      title: "category",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "caretor",
      key: "caretor",
      render:(text,record,index) =>{
          return <Tag color="green" className="btn btn-danger">{record.creator?.name}</Tag>;
      }
    },
    {
      title: "Action",
      key: "action",
      render: (text, record, index) => {
        return <div>
            <button className="btn mr-2 btn-info" onClick={()=>{
                  const aciton = {
                    type: 'OPEN_FORM_EDIT_PROJECT',
                    Component: <FormEditProject/>      
                  }
                  // dispatch lên reducer nộng dung drawer
                  dispatch(aciton);
                  

              }}>
              <EditOutlined style={{fontSize: 17}}/>
            </button>
            <button className="btn btn-danger mr-2">
              <DeleteOutlined />
            </button>
        </div>
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
      <Table columns={columns} rowKey={'id'} dataSource={projectList} onChange={handleChange} />
    </div>
  );
}

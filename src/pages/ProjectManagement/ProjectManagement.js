import React, { useState } from "react";
import { Table, Button, Space } from "antd";
// import ReactHtmlParser from "react-html-parser";
import {DeleteOutlined, EditOutlined, } from '@ant-design/icons'
const data =  [
    {
      "members": [
        {
          "userId": 1043,
          "name": "dat",
          "avatar": "https://ui-avatars.com/api/?name=dat"
        },
        {
          "userId": 827,
          "name": "Tien Do",
          "avatar": "https://ui-avatars.com/api/?name=Tien Do"
        },
        {
          "userId": 857,
          "name": "nam tran",
          "avatar": "https://ui-avatars.com/api/?name=nam tran"
        },
        {
          "userId": 1153,
          "name": "Thoa Nguyen",
          "avatar": "https://ui-avatars.com/api/?name=Thoa Nguyen"
        }
      ],
      "creator": {
        "id": 1034,
        "name": "dat"
      },
      "id": 2890,
      "projectName": "Delete your project not mine.",
      "description": "",
      "categoryId": 1,
      "categoryName": "Dự án web",
      "alias": "delete-your-project-not-mine-",
      "deleted": false
    },
    {
      "members": [
        {
          "userId": 874,
          "name": "Ngô Công Hậu",
          "avatar": "https://ui-avatars.com/api/?name=Ngô Công Hậu"
        },
        {
          "userId": 1147,
          "name": "Harry",
          "avatar": "https://ui-avatars.com/api/?name=Harry"
        },
        {
          "userId": 1132,
          "name": "Tuấn",
          "avatar": "https://ui-avatars.com/api/?name=Tuấn"
        }
      ],
      "creator": {
        "id": 1158,
        "name": "Harry"
      },
      "id": 2891,
      "projectName": "Harry 9:17 1/15/2022",
      "description": "<h1><strong>Harry 9:17 1/15/2022</strong></h1>",
      "categoryId": 2,
      "categoryName": "Dự án phần mềm",
      "alias": "harry-9-17-1-15-2022",
      "deleted": false
    },
    {
      "members": [
        {
          "userId": 857,
          "name": "nam tran",
          "avatar": "https://ui-avatars.com/api/?name=nam tran"
        },
        {
          "userId": 882,
          "name": "Mr Vũ",
          "avatar": "https://ui-avatars.com/api/?name=Mr Vũ"
        }
      ],
      "creator": {
        "id": 1168,
        "name": "Bas"
      },
      "id": 2894,
      "projectName": "Cyberbugs",
      "description": "<p>Hello word!</p>",
      "categoryId": 1,
      "categoryName": "Dự án web",
      "alias": "cyberbugs",
      "deleted": false
    },
    {
      "members": [
        {
          "userId": 874,
          "name": "Ngô Công Hậu",
          "avatar": "https://ui-avatars.com/api/?name=Ngô Công Hậu"
        },
        {
          "userId": 868,
          "name": "andrew",
          "avatar": "https://ui-avatars.com/api/?name=andrew"
        }
      ],
      "creator": {
        "id": 1083,
        "name": "abc"
      },
      "id": 2899,
      "projectName": "tuanh1",
      "description": "<p>kkkkkjjjjjjabcjgk</p>",
      "categoryId": 1,
      "categoryName": "Dự án web",
      "alias": "tuanh1",
      "deleted": false
    },
    {
      "members": [
        {
          "userId": 1176,
          "name": "HaiDang",
          "avatar": "https://ui-avatars.com/api/?name=HaiDang"
        }
      ],
      "creator": {
        "id": 1176,
        "name": "HaiDang"
      },
      "id": 2901,
      "projectName": "Hai Dang Project",
      "description": "<p>Hai Dang 123</p>",
      "categoryId": 2,
      "categoryName": "Dự án phần mềm",
      "alias": "hai-dang-project",
      "deleted": false
    },
    {
      "members": [
        {
          "userId": 1078,
          "name": "Lona",
          "avatar": "https://ui-avatars.com/api/?name=Lona"
        },
        {
          "userId": 1027,
          "name": "Khải",
          "avatar": "https://ui-avatars.com/api/?name=Khải"
        },
        {
          "userId": 884,
          "name": "Trang",
          "avatar": "https://ui-avatars.com/api/?name=Trang"
        },
        {
          "userId": 827,
          "name": "Tien Do",
          "avatar": "https://ui-avatars.com/api/?name=Tien Do"
        },
        {
          "userId": 857,
          "name": "nam tran",
          "avatar": "https://ui-avatars.com/api/?name=nam tran"
        }
      ],
      "creator": {
        "id": 1078,
        "name": "Lona"
      },
      "id": 2902,
      "projectName": "Mobile Cyberbugs",
      "description": "<p>abcdef</p>",
      "categoryId": 2,
      "categoryName": "Dự án phần mềm",
      "alias": "mobile-cyberbugs",
      "deleted": false
    },
    {
      "members": [],
      "creator": {
        "id": 827,
        "name": "Tien Do"
      },
      "id": 2903,
      "projectName": "string",
      "description": "string",
      "categoryId": 1,
      "categoryName": "Dự án web",
      "alias": "string",
      "deleted": false
    },
    {
      "members": [
        {
          "userId": 881,
          "name": "Huy",
          "avatar": "https://ui-avatars.com/api/?name=Huy"
        },
        {
          "userId": 954,
          "name": "Nguyễn Vũ Lâm",
          "avatar": "https://ui-avatars.com/api/?name=Nguyễn Vũ Lâm"
        }
      ],
      "creator": {
        "id": 1102,
        "name": "DuongPham"
      },
      "id": 2905,
      "projectName": "My project",
      "description": "<p>My project</p>",
      "categoryId": 2,
      "categoryName": "Dự án phần mềm",
      "alias": "my-project",
      "deleted": false
    },
    {
      "members": [],
      "creator": {
        "id": 1083,
        "name": "abc"
      },
      "id": 2906,
      "projectName": "tuanh",
      "description": "<p>l&agrave;m web</p>",
      "categoryId": 1,
      "categoryName": "Dự án web",
      "alias": "tuanh",
      "deleted": false
    },
    {
      "members": [],
      "creator": {
        "id": 827,
        "name": "Tien Do"
      },
      "id": 2908,
      "projectName": "hung",
      "description": "<p>hung la toi&nbsp;</p>",
      "categoryId": 3,
      "categoryName": "Dự án di động",
      "alias": "hung",
      "deleted": false
    },
    {
      "members": [],
      "creator": {
        "id": 827,
        "name": "Tien Do"
      },
      "id": 2909,
      "projectName": "hung1",
      "description": "<p>hung1</p>",
      "categoryId": 2,
      "categoryName": "Dự án phần mềm",
      "alias": "hung1",
      "deleted": false
    },
    {
      "members": [],
      "creator": {
        "id": 827,
        "name": "Tien Do"
      },
      "id": 2910,
      "projectName": "hung la toi",
      "description": "<p>hung la toi&nbsp;</p>",
      "categoryId": 2,
      "categoryName": "Dự án phần mềm",
      "alias": "hung-la-toi",
      "deleted": false
    },
    {
      "members": [
        {
          "userId": 827,
          "name": "Tien Do",
          "avatar": "https://ui-avatars.com/api/?name=Tien Do"
        },
        {
          "userId": 870,
          "name": "dsadsad",
          "avatar": "https://ui-avatars.com/api/?name=dsadsad"
        },
        {
          "userId": 874,
          "name": "Ngô Công Hậu",
          "avatar": "https://ui-avatars.com/api/?name=Ngô Công Hậu"
        },
        {
          "userId": 857,
          "name": "nam tran",
          "avatar": "https://ui-avatars.com/api/?name=nam tran"
        }
      ],
      "creator": {
        "id": 1034,
        "name": "dat"
      },
      "id": 2911,
      "projectName": "Delete your project not mine ",
      "description": "",
      "categoryId": 1,
      "categoryName": "Dự án web",
      "alias": "delete-your-project-not-mine",
      "deleted": false
    },
    {
      "members": [],
      "creator": {
        "id": 827,
        "name": "Tien Do"
      },
      "id": 2913,
      "projectName": "nhanh",
      "description": "<p>sdsdsd</p>",
      "categoryId": 2,
      "categoryName": "Dự án phần mềm",
      "alias": "nhanh",
      "deleted": false
    },
    {
      "members": [],
      "creator": {
        "id": 827,
        "name": "Tien Do"
      },
      "id": 2914,
      "projectName": "dự án 1",
      "description": "<p>qưeqwe</p>",
      "categoryId": 2,
      "categoryName": "Dự án phần mềm",
      "alias": "du-an-1",
      "deleted": false
    },
    {
      "members": [],
      "creator": {
        "id": 827,
        "name": "Tien Do"
      },
      "id": 2915,
      "projectName": "du an demo",
      "description": "<p>duan demo</p>",
      "categoryId": 2,
      "categoryName": "Dự án phần mềm",
      "alias": "du-an-demo",
      "deleted": false
    },
    {
      "members": [],
      "creator": {
        "id": 827,
        "name": "Tien Do"
      },
      "id": 2916,
      "projectName": "qưeqweqwe",
      "description": "<p>ssd</p>",
      "categoryId": 1,
      "categoryName": "Dự án web",
      "alias": "queqweqwe",
      "deleted": false
    },
    {
      "members": [],
      "creator": {
        "id": 827,
        "name": "Tien Do"
      },
      "id": 2917,
      "projectName": "qưeqweqweđ",
      "description": "<p>ssd</p>",
      "categoryId": 1,
      "categoryName": "Dự án web",
      "alias": "queqweqwed",
      "deleted": false
    }
  ];

export default function ProjectManagement(props) {
  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });

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
    },
    {
      title: "projectName",
      dataIndex: "projectName",
      key: "projectName",
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
      // render:(text,record,index)=>{
      //   let jsxContent = ReactHtmlParser.(text);
      //   return <div key={index}>
      //     {jsxContent}
      //   </div>
      // }
    },
    {
      title: "Action",
      key: "action",
      render: (text, record, index) => (
        <Space size="middle">
          <a href="#">
            <EditOutlined />
          </a>
          <a href="#">
            <DeleteOutlined />
          </a>
        </Space>
      ),
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
      <Table columns={columns} rowKey={'id'} dataSource={data} onChange={handleChange} />
    </div>
  );
}

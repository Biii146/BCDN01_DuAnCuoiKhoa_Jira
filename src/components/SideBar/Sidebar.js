import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  BarsOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

export default function Sidebar() {
  const [state, setState] = useState({
    collapsed: true,
  });

  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };
  return (
    <div>
      <Sider trigger={null} collapsible collapsed={state.collapsed} style={{height:'100%'}}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <div className="text-right" onClick={toggle}><BarsOutlined style={{cursor: "pointer" , fontSize:20 }}/></div>
          <Menu.Item key="1" icon={<PlusOutlined />}>
            Create 
          </Menu.Item>
          <Menu.Item key="2" icon={<SearchOutlined />}>
            Search
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}

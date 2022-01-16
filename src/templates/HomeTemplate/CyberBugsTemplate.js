import React, { Component, Fragment } from "react";
import { Route } from "react-router";
import MainMenu from "../../components/MainMenu/MainMenu";
import "../../index.css";
import Sidebar from "../../components/SideBar/Sidebar";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/MainMenu/Header";
import Info from "../../components/MainMenu/Info";
import Content from "../../components/MainMenu/Content";
import ProjectDetail from "../../pages/ProjectDetail/ProjectDetail";
import Modal from "../../components/Modal/Modal";

export default function CyberBugsTemplate(props) {
  return (
    <Fragment>
      <Route 
        exact
        path={props.path}
        render={(propsRoute) => {
          return (
            <div className="jira">
              <Sidebar />
              <Menu />
              <props.component {...propsRoute} />
              <Modal />
            </div>
          );
        }}
      />
    </Fragment>
  );
}

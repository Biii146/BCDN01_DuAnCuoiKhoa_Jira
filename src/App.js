
import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Router, Switch , useHistory } from 'react-router-dom'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProjectManagement from './pages/ProjectManagement/ProjectManagement';
import CreateProject from './pages/CreateProject/CreateProject';
import CreateTask from './pages/CreateTask/CreateTask';
import EditTask from './pages/EditTask/EditTask';
import CyberBoard from './pages/CyberBoard/CyberBoard';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import UserAdmin from './pages/UserAdmin/UserAdmin';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import LoginTemplate from './templates/LoginTemplate/LoginTemplate';
import CyberBugsTemplate from './templates/HomeTemplate/CyberBugsTemplate';
import MainMenu from './components/MainMenu/MainMenu';
import LoadingComponent from './components/GlobalSetting/LoadingComponent/LoadingComponent';
import {useDispatch} from 'react-redux'


function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "ADD_HISTORY", history: history });
  }, [])


  return (
    // dùng history để xử lý đăng nhập chuyển hướng trang sẽ dễ hơn
    <>
    {/* <LoadingComponent/> */}
      <Switch>

        <LoginTemplate exact path="/register" component={Register} />
        <CyberBugsTemplate exact path="/mainmenu" component={MainMenu} />
        <CyberBugsTemplate exact path="/projectmanagement" component={ProjectManagement} />
        <CyberBugsTemplate exact path="/createproject" component={CreateProject} />
        <HomeTemplate exact path="/cyberboard" component={CyberBoard} />
        <HomeTemplate exact path="/projectdetail" component={ProjectDetail} />
        <HomeTemplate exact path="/createtask" component={CreateTask} />
        <HomeTemplate exact path="/edittask" component={EditTask} />
        <CyberBugsTemplate exact path="/useradmin" component={UserAdmin} />

        {/* Trang chủ */}
        {/* <HomeTemplate exact path="/" component={ProjectManagement} /> */}
        <LoginTemplate exact path="/" component={Login} />



      </Switch>

    </>


  );
}

export default App;

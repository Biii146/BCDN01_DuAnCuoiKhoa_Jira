import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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


function App() {
  return (
    <BrowserRouter>
      <Switch>

        <LoginTemplate exact path="/register" component={Register} />
        <LoginTemplate exact path="/login" component={Login} />
        <HomeTemplate exact path="/projectmanagement" component={ProjectManagement} />
        <HomeTemplate exact path="/createproject" component={CreateProject} />
        <HomeTemplate exact path="/cyberboard" component={CyberBoard} />
        <HomeTemplate exact path="/projectdetail/" component={ProjectDetail} />
        <HomeTemplate exact path="/createtask" component={CreateTask} />
        <HomeTemplate exact path="/edittask" component={EditTask} />
        <UserTemplate exact path="/useradmin" component={UserAdmin} />

        {/* Trang chủ */}
        <HomeTemplate exact path="/" component={ProjectManagement} />


      </Switch>

    </BrowserRouter>


  );
}

export default App;

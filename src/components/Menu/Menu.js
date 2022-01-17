import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "../../index.css";


export default function Menu() {
  const userLogin = useSelector(state => state.UserLoginJiraReducer.userLogin);
    return (
      <div className="menu">
        <div className="account">
          <div className="avatar">
            <img src={userLogin?.avatar} alt="1" />
          </div>
          <div className="account-info">
            <p className="mt-2">{userLogin?.name}</p>
          </div>
        </div>
        <div className="control">
          <div>
            <i className="fa fa-credit-card mr-1" />
            <NavLink
              className="text-dark"
              to="/mainmenu"
              activeClassName="active font-weight-bold"
            >
              Cyber Board
            </NavLink>
          </div>
          <div>
            <i className="fa fa-cog mr-1" />
            <NavLink
              className="text-dark"
              to="/projectmanagement"
              activeClassName="active font-weight-bold"
            >
              Project management
            </NavLink>
          </div>
          <div>
            <i className="fa fa-cog mr-1" />
            <NavLink
              className="text-dark"
              to="/createproject"
              activeClassName="active font-weight-bold"
            >
              Create Project
            </NavLink>
          </div>
          <div>
            <i class="fas fa-users-cog mr-1"></i>
            <NavLink
              className="text-dark"
              to="/useradmin"
              activeClassName="active font-weight-bold"
            >
              User Admin
            </NavLink>
          </div>
        </div>
        <div className="feature">
          <div>
            <i className="fa fa-truck mr-1" />
            <span>Releases</span>
          </div>
          <div>
            <i className="fa fa-equals mr-1" />
            <span>Issues and filters</span>
          </div>
          <div>
            <i className="fa fa-paste mr-1" />
            <span>Pages</span>
          </div>
          <div>
            <i className="fa fa-location-arrow mr-1" />
            <span>Reports</span>
          </div>
          <div>
            <i className="fa fa-box mr-1" />
            <span>Components</span>
          </div>
        </div>
      </div>
    );
}

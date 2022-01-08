import React from 'react'
import './Login.css'
import { NavLink} from 'react-router-dom';
import { Input, Space, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withFormik, Formik } from "formik";
import * as Yup  from "yup";
import {connect} from "react-redux";
import { USER_SIGNIN_API } from '../../redux/constants/JiraCyber';
import { signinCyberbugAction } from '../../redux/actions/JiraAction';



 function Login(props) {
    const { values, touched, errors, handleSubmit, handleChange, handleBlur } = props;

    return (
            <form onSubmit={handleSubmit} onChange={handleChange}>
            <div className="wrap-login">
                <div className="layout-login">
                    <div className="login-form text-center py-5 mx-auto">
                        <div>
                            <h2 style={{ fontWeight: "bold" }}>Login Jira</h2>
                        </div>
                        <Space direction="vertical" className="py-2" style={{ minWidth: 250, outlineColor: "rgb(17,155,168)" }}>
                            <Input className="form-login mt-3" name="email" placeholder="email" onChange={handleChange} prefix={<UserOutlined />} />
                                <div className="text-danger">{errors.email}</div>
                            <Input className="form-login mt-3" name="password" type="password" placeholder="password" onChange={handleChange} prefix={<LockOutlined />} />
                                <div className="text-danger">{errors.password}</div>
                            <span>Do not have an account? <NavLink to="/register" alt="#">Sign Up</NavLink> </span>
                        </Space>
                        <div className="btn-login py-2">
                            <Button htmlType="submit" size="large" style={{ minWidth: 200, backgroundColor: 'rgb(102,117,223)', color: '#fff' }} className="mt-3">Login</Button>
                        </div>
                        <div style={{position:'absolute', bottom:'20px', left:'40%'}}> 
                            <p>Or login with:</p>
                            <Button shape="circle" style={{width:'40px',height:'40px',borderRadius:'50%',color:'white',backgroundColor:'rgb(56,88,154)'}} className="mr-2">
                                <i className="fab fa-facebook-f"></i>
                            </Button>
                            <Button shape="circle" style={{width:'40px',height:'40px',borderRadius:'50%',color:'white',backgroundColor:'rgb(29,161,242)'}} className="ml-2">
                                <i className="fab fa-twitter"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
    )
}

const LoginWithFormik = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required!")
      .email("email is invalid!"),
    password: Yup.string()
      .required("Password is required!")
      .min(6, "password must have min 6 characters")
      .max(15, "password have min 15 characters"),
  }),
  handleSubmit: ({email, password}, {props,setSubmitting }) => {
    
    // từ jiraAction
    props.dispatch(signinCyberbugAction(email, password));
    
  },
  displayName: "Login cyberBugs",
})(Login);

export default connect()(LoginWithFormik);
import React from 'react'
import './Login.css'
import { Input, Space, Button } from 'antd'
import {withFormik} from 'formik'
import * as Yup from 'yup';
import { signinAction } from '../../redux/actions/LoginAction/LoginAction';
import { connect } from 'react-redux';


function Login(props) {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
   
    return (
        <form onSubmit={handleSubmit}>
            <div className="wrap-login">
                <div className="layout-login">
                    <div className="login-form text-center py-5 mx-auto">
                        <div>
                            <h2 style={{ fontWeight: "bold" }}>JIRA TASK</h2>
                        </div>
                        <Space direction="vertical" className="py-2" style={{ minWidth: 250, outlineColor: "rgb(17,155,168)" }}>
                            <Input onChange={handleChange} className="form-login" name="email" placeholder="Email"/>
                            <span className="text-danger">{errors.email}</span>
                            <Input onChange={handleChange} className="form-login" name="password" type="password" placeholder="Password"/>
                            <span className="text-danger">{errors.password}</span>

                        </Space>
                        <div className="btn-login py-2">
                            <button style={{ fontWeight: "bold" }} type="submit">Login</button>
                        </div>
                        <div style={{position:'absolute', bottom:'20px', left:'40%'}}> 
                            <p>Or login with:</p>
                            <Button shape="circle" style={{width:'40px',height:'40px',borderRadius:'50%',color:'white',backgroundColor:'rgb(56,88,154)'}} className="mr-2">
                                <i class="fab fa-facebook-f"></i>
                            </Button>
                            <Button shape="circle" style={{width:'40px',height:'40px',borderRadius:'50%',color:'white',backgroundColor:'rgb(29,161,242)'}} className="ml-2">
                                <i class="fab fa-twitter"></i>
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
        email: '' ,
        password: '',
    }),
  
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email is invalid'),
        password: Yup.string().min(6,'Password must have more than 6 characters').max(12,'Password must have less than 12 characters')
    }),

    handleSubmit: ({email,password}, {props, setSubmitting }) => {
      props.dispatch(signinAction(email,password))
    },
    displayName: 'JIRA TASK',
  })(Login);
 
export default connect () (LoginWithFormik)
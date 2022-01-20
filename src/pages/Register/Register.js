import React from 'react'
import { Input, Space, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Formik } from 'formik';

export default function Register() {
    return (
        <div>
            <div className="wrap-login">
                <div className="layout-login">
                    <Formik 
                    initialValue={{
                        name: '',
                        email: '',
                        password: '',
                    }}
                    render={()=>(
                        <div className="login-form text-center py-5 mx-auto">
                        <div>
                            <h2 style={{ fontWeight: "bold" }}>SIGN UP</h2>
                        </div>
                        <Space direction="vertical" className="py-2" style={{ minWidth: 250, outlineColor: "rgb(17,155,168)" }}>
                            <Input className="form-login mt-4" type="name" placeholder="Name" prefix={<UserOutlined />} />
                            <Input className="form-login mt-3" type="email" placeholder="Email" prefix={<UserOutlined />} />
                            <Input className="form-login mt-3" type="password" placeholder="password" prefix={<LockOutlined />} />
                        </Space>
                        <div className="btn-login py-2">
                            <Button htmlType="submit" size="large" style={{ minWidth: 200, backgroundColor: 'rgb(102,117,223)', color: '#fff' }} className="mt-3">SignUp</Button>
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
                    )}/>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './Login.css'
import { Input, Space, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';



export default function Login() {
    return (
        <div>
            <div className="wrap-login">
                <div className="layout-login">
                    <div className="login-form text-center py-5 mx-auto">
                        <div>
                            <h2 style={{ fontWeight: "bold" }}>JIRA TASK</h2>
                        </div>
                        <Space direction="vertical" className="py-2" style={{ minWidth: 250, outlineColor: "rgb(17,155,168)" }}>
                            <Input className="form-login" type="email" placeholder="email" prefix={<UserOutlined />} />
                            <Input className="form-login" type="password" placeholder="password" prefix={<LockOutlined />} />
                        </Space>
                        <div className="btn-login py-2">
                            <button style={{ fontWeight: "bold" }}>Login</button>
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
        </div>
    )
}

import React from 'react'
import "./UserAdmin.css"
import { Menu, Dropdown, Input, Pagination } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';


export default function UserAdmin() {
    const userLogin = useSelector(state => state.UserLoginJiraReducer.userLogin);
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="#">profile</a>
            </Menu.Item>
            <hr />
            <Menu.Item key="1">
                <a href="/">Logout</a>
            </Menu.Item>
            
        </Menu>
    );

    return (
        <div className="container" >
            <div className="container user-header py-1" style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="mr-5">
                    <span className="mr-2">{userLogin?.name}</span>
                    <img src={userLogin?.avatar} alt="" style={{ borderRadius: "50%", width: "30px" }} className="mr-2" />
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" style={{ color: "#232121" }} onClick={e => e.preventDefault()}>
                            <CaretDownOutlined />
                        </a>
                    </Dropdown>
                </div>
            </div>
            <div className="container py-3 mt-5">
                <div className="create-user">
                    <a href="">
                        <i class="fa fa-user-plus"></i>
                        <span className="ml-2">Create new user</span>
                    </a>
                </div>
                <div className="search-form py-3" style={{ display: "flex" }}>
                    <Input />
                    <button className="ml-2">Search</button>
                </div>
                <div className="table py-3">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone number</th>
                                <th scope="col">Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark@gmail.com</td>
                                <td>Mark</td>
                                <td>0829302182</td>
                                <td>
                                    <button style={{borderRadius:"50%"}}><i class="fa fa-user-edit"></i></button>
                                    <button className="ml-2" style={{ backgroundColor: "crimson", border: "1px solid crimson" }}><i class="fa fa-user-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Mark@gmail.com</td>
                                <td>Mark</td>
                                <td>0829302182</td>
                                <td>
                                    <button style={{borderRadius:"50%"}}><i class="fa fa-user-edit"></i></button>
                                    <button className="ml-2" style={{ backgroundColor: "crimson", border: "1px solid crimson" }}><i class="fa fa-user-times"></i></button>
                                </td>                           
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Mark@gmail.com</td>
                                <td>Mark</td>
                                <td>0829302182</td>
                                <td>
                                    <button style={{borderRadius:"50%"}}><i class="fa fa-user-edit"></i></button>
                                    <button className="ml-2" style={{ backgroundColor: "crimson", border: "1px solid crimson" }}><i class="fa fa-user-times"></i></button>
                                </td>                            
                            </tr>
                        </tbody>
                    </table>
                    <Pagination defaultCurrent={1} total={50} style={{ textAlign: "center" }} />
                </div>

            </div>


        </div>
    )
}

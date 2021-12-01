import React from 'react'
import "./UserAdmin.css"
import { Menu, Dropdown, Input, Pagination } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';


export default function UserAdmin() {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="https://www.antgroup.com">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="https://www.aliyun.com">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );

    return (
        <div>
            <div className="user-header py-1" style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="mr-5">
                    <span className="mr-2">Hi, User Name</span>
                    <img src="https://i.pravatar.cc/150?u=" alt="" style={{ borderRadius: "50%", width: "30px" }} className="mr-2" />
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" style={{ color: "#232121" }} onClick={e => e.preventDefault()}>
                            <CaretDownOutlined />
                        </a>
                    </Dropdown>
                </div>
            </div>
            <div className="container py-3">
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

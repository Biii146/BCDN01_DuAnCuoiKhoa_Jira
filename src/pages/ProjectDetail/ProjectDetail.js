import React from 'react';
import './ProjectDetail.css'
import { Radio, Select, Input, InputNumber } from 'antd';


export default function ProjectDetail(props) {
    // Select multiple choices of Antd
    const { Option } = Select;

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value) {
        console.log(`Selected: ${value}`);
    }

    const [size, setSize] = React.useState('default');

    // form of Antd
    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    function onChange(value) {
        console.log('changed', value);
    }

   
    return (
        <div className="container modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
            <div className="row">
                <div className="col-7">
                    <div>
                        <span className="task-number">
                            <i class="fa fa-bookmark"></i>
                            <span className="ml-2 font-weight-bold">TASK-217871</span>
                        </span>
                    </div>
                    <div className="py-3">
                        <h4>This is an issue of name: Task.</h4>
                    </div>
                    <div className="task-type">
                        <h4>Task type</h4>
                        <Radio.Group  defaultValue="a" buttonStyle="solid">
                            <Radio.Button value="a">
                                <i class="fa fa-exclamation-circle"></i>
                                <span className="ml-1">Bug</span>
                            </Radio.Button>
                            <Radio.Button value="b">
                                <i class="fab fa-gg-circle"></i>
                                <span className="ml-1">Story</span>
                            </Radio.Button>
                            <Radio.Button value="c">
                                <i class="fa fa-check-circle"></i>
                                <span className="ml-1">Task</span>
                            </Radio.Button>
                        </Radio.Group>
                    </div>
                    <div className="task-description py-4" style={{ fontSize: "16px" }}>
                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse expedita quis vero tempora error sed reprehenderit sequi laborum, repellendus quod laudantium tenetur nobis modi reiciendis sint architecto. Autem libero quibusdam odit assumenda fugiat? Beatae aliquid labore vitae obcaecati sapiente asperiores quia amet id aut, natus quo molestiae quod voluptas, temporibus iusto laudantium sit tempora sequi. Rem, itaque id, fugit magnam asperiores voluptas consectetur aliquid vel error illum, delectus eum eveniet laudantium at repudiandae!</p>
                    </div>

                    <div className="task-comment py-3">
                        <h4>Comment</h4>
                        <div className="block-comment row">
                            <div class="avatar col-2">
                                <img src="https://picsum.photos/id/2/2000" alt="" className="w-100" style={{ borderRadius: "50%" }} />
                            </div>
                            <div className="col-10">
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add your comment here" style={{ height: "100px" }} />
                                    </div>
                                    <button type="submit" className="font-weight-bold">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="list-comment row py-5">
                            <div class="avatar col-2">
                                <img src="https://picsum.photos/id/3/2000" alt="" className="w-100" style={{ borderRadius: "50%" }} />
                            </div>
                            <div className="col-10">
                                <div className="comment-title font-weight-bold">
                                    <span>Lord Gaben</span><span> - a month ago</span>
                                </div>
                                <div className="comment-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Repellendus tempora ex
                                    voluptatum saepe ab officiis alias totam ad
                                    accusamus molestiae?</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-5">
                    <div className="task-header" style={{ display: "flex", justifyContent: "flex-start" }}>
                        <span className="task-icon">
                            <a href="">
                                <i class="fab fa-telegram-plane"></i>
                                <span className="ml-2">Give feedback</span>
                            </a>
                        </span>
                        <span className="task-icon ml-4">
                            <a href="">
                                <i class="fa fa-link"></i>
                                <span className="ml-2">Copy link</span>
                            </a>
                        </span>
                        <span className="task-icon ml-4">
                            <a href="">
                                <i class="fa fa-trash-alt"></i>
                                <span className="ml-2">Remove</span>
                            </a>
                        </span>
                    </div>
                    <div className="task-status py-3">
                        <div className="form-group">
                            <h6>Status</h6>
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="new">New</Option>
                                <Option value="inProgress">In progress</Option>
                                <Option value="resolved">Resolved</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="task-assignee">
                        <h6>Assignees</h6>
                        <Select
                            mode="multiple"
                            size={size}
                            placeholder="Please select"
                            defaultValue={['a10', 'c12']}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                            name="listUserAsign"
                        >
                            {children}
                        </Select>
                    </div>
                    <div className="reporter py-3">
                        <h6>Reporter</h6>
                        <Input />
                    </div>
                    <div className="task-priority py-3">
                        <h6>Priority</h6>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            optionFilterProp="children"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="high">
                                <i class="fa fa-circle" style={{ color: "rgb(244,67,54)", marginRight: "10px" }}></i>
                            High
                            </Option>
                            <Option value="medium">
                                <i class="fa fa-circle" style={{ color: "rgb(255,193,7)", marginRight: "10px" }}></i>
                            Medium
                            </Option>
                            <Option value="low">
                                <i class="fa fa-circle" style={{ color: "rgb(139,195,74)", marginRight: "10px" }}></i>
                                Low
                            </Option>
                        </Select>
                    </div>
                    <div className="estimate-hour py-3">
                        <h6>Original estimate (hour)</h6>
                        <InputNumber min={1} max={100} defaultValue={3} onChange={onChange} />
                    </div>
                    <div className="time-tracking">
                        <h6>Time tracking</h6>
                        <div style={{ display: 'flex' }}>
                            <i className="fa fa-clock" />
                            <div style={{ width: '100%' }}>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%', backgroundColor: "rgb(14,185,211)" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="logged">4h logged</p>
                                    <p className="estimate-time">12h estimated</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ color: '#929398' }}>Create at a month ago</div>
                        <div style={{ color: '#929398' }}>Update at a few seconds ago</div>
                    </div>


                </div>

            </div>

        </div>

    )
}

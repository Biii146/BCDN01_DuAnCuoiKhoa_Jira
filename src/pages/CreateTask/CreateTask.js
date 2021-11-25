import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Select, Slider } from 'antd';



export default function CreateTask() {
    // Editor
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

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

    return (
        <div className="container">
            <h3>Create Task</h3>
            <div className="form-group">
                <h6>Project</h6>
                <select name="projectId" className="form-control">
                    <option value="1">Project A</option>
                    <option value="2">Project B</option>
                </select>
            </div>
            <div className="form-group">
                <h6>Task name</h6>
                <input className="form-control" name="taskName" />
            </div>
            <div className="form-group">
                <h6>Status</h6>
                <select name="statusId" className="form-control">
                    <option value="3">Backlog 1</option>
                    <option value="4">Backlog 2</option>
                </select>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-6">
                        <h6>Priority</h6>
                        <select name="priorityId" className="form-control">
                            <option>Urgent</option>
                            <option>High</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <h6>Task type</h6>
                        <select name="typeId" className="form-control">
                            <option>New task</option>
                            <option>Bugs</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-6">
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
                    <div className="col-6">
                        <h6>Time tracking</h6>
                        <Slider defaultValue={30} tooltipVisible />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-6">
                        <h6>Original Estimate</h6>
                        <input className="form-control" type="number" name="originalEstimate" defaultValue="0" min="0" />
                    </div>
                    <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <h6>Time spent</h6>
                            <input className="form-control" type="number" name="timeTrackingSpent" defaultValue="0" min="0" />
                        </div>
                        <div className="col-6">
                            <h6>Time estimate</h6>
                            <input className="form-control" type="number" name="timeTrackingRemaining" defaultValue="0" min="0" />
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            <div className="form-group">
                <h6>Description</h6>
                <Editor
                    name="description"
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
            </div>
            <div style={{display:"flex",justifyContent:"flex-end"}} className="py-3">
                <button style={{fontWeight:"bold"}}>Submit</button>
                <button className="ml-2" style={{backgroundColor:"rgb(209,226,227)", border:"rgb(209,226,227)", color:"white"}}>Cancel</button>
            </div>
        </div>
    )
}


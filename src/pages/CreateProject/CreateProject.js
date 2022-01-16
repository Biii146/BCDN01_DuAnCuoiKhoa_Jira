import React, { useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {withFormik} from 'formik';
import * as Yup from 'yup';
import {connect, useSelector, useDispatch} from 'react-redux'
import { Button } from "antd";


 function CreateProject(props) {
     const arrProjectCategory = useSelector(state=>state.ProjectCategoryReducer.arrProjectCategory);
     const dispatch = useDispatch();
     
    const {
      values,
      touched,
      errors,
      handleSubmit,
      handleChange,
      handleBlur,
      setFieldValue,
    } = props;

    useEffect(() =>{
        // goi API de lay the selec
        dispatch({ type: 'GET_ALL_PROJECT_CATEGORY_SAGA'});
        
    },[]);
    
    const handleEditorChange = (content, editor) => {
        setFieldValue("description",content);
    }
  return (
    <div className="container m-3 mt-5">
      <h3>Create Project</h3>
      <form className="container" onSubmit={handleSubmit} onchange={handleChange}>
        <div className="form-group">
          <p>Name</p>
          <input className="form-control" name="projectName" onChange={handleChange} />
        </div>
        <div className="form-group">
          <p>Description</p>
          <Editor
            name="description"
            init={{
              selector: 'textarea#myTextArea',
              height: 300,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={handleEditorChange}
          />
        </div>
        <div className="form-group">
          <select name="categoryId" className="form-control" onChange={handleChange}>
            {arrProjectCategory?.map((item, index) => {
              return (
                <option value={item.id} key={index}>
                  {item.projectCategoryName}
                </option>
              );
            })}
          </select>
        </div>
        <Button type="submit" className="btn btn-primary">
          Save
        </Button>
      </form>
    </div>
  );
}
const createProjectForm = withFormik({
  enableReinitialize:true,
    mapPropsToValues: (props) => {
      console.log('propsValues',props);
        return {

          "projectName": '',
          "description": '',
          "categoryId": props.arrProjectCategory[0]?.id,
        };
    },
    validationSchema: Yup.object().shape({

    }),
    handleSubmit: (values, {props, setSubmitting}) => {
      console.log("demo",values);
       props.dispatch({ 
            type: 'CREATE_PROJECT_SAGA',
            newProject: values 
        })

    },
    displayName: 'createProjectFormik',
})(CreateProject);

const mapStateToProps = (state) => ({
  
      arrProjectCategory:state.ProjectCategoryReducer.arrProjectCategory
  
})

export default connect(mapStateToProps)(createProjectForm);

import React, { useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {withFormik} from 'formik';
import * as Yup from 'yup';
import {connect, useSelector, useDispatch} from 'react-redux'


 function CreateProject(props) {
     const arrProjectCategory = useSelector(state=>state.ProjectCategoryReducer.arrProjectCategory);
     const dispatch = useDispatch();
     console.log("ket qua", arrProjectCategory);
    const {
        values,
        touched,
        errors,
        handleSubmit, 
        handleChange,
        handleBlur,

    } = props;

    useEffect(() =>{
        // goi API de lay the selec
        dispatch({ type: "GET_ALL_PROJECT_CATEGORY_SAGA" });
        
    },[]);
    
    const handleEditorChange = (content, editor) => {
        
    }
  return (
    <div className="container m-3 mt-5">
      <h3>Create Project</h3>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <p>Name</p>
          <input className="form-control" name="projectName" />
        </div>
        <div className="form-group">
          <p>Description</p>
          <Editor
            name="description"
            init={{
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
          <select name="categoryId" className="form-control">
            {arrProjectCategory.map((item, index) => {
              return (
                <option value={item.id} key={index}>
                  {item.projectCategoryName}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}
const createProjectForm = withFormik({
    mapPropsToValues: () => ({
        
    }),
    validationSchema: Yup.object().shape({

    }),
    handleSubmit: (value, {props, setSubmitting}) => {

    },
    displayName: 'createProjectFormik',
})(CreateProject);

export default connect()(createProjectForm);

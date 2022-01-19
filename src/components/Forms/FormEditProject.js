import { Editor } from '@tinymce/tinymce-react';
import { withFormik } from 'formik';
import React, { useEffect } from 'react'
import * as Yup from "yup";
import { useSelector, useDispatch, connect } from "react-redux";

 function FormEditProject(props) {
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


    // const submitForm = (e) => {
    //   e.preventDefault();
    //   alert("submit edit");
    // };


  useEffect(() =>{
    dispatch({ type: "GET_ALL_PROJECT_CATEGORY_SAGA" });

    dispatch({ type: "SET_SUBMIT_EDIT_PROJECT", submitFunction: handleSubmit });
  },[])

  const handleEditorChange = (content, editor) => {
    setFieldValue("description", content);
  };
    return (
      <form className="container-fluid" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <p className="font-weight-bold">Project ID</p>
              <input
                value={values.id}
                disabled
                className="form-control"
                name="id"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <p className="font-weight-bold">Project Name</p>
              <input
                value={values.projectName}
                className="form-control"
                name="projectName"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <p className="font-weight-bold">Project category</p>
              <select
                name="category"
                className="form-control"
                value={values.categoryId}
              >
                {arrProjectCategory?.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>{item.projectCategoryName}</option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <p className="font-weight-bold">Description</p>
              <Editor
                name="description12"
                initialValue={values.description}
                init={{
                  selector: "textarea#myTextArea",
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
          </div>
        </div>
      </form>
    );
}


const EditProjectForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const {proiectEdit} = props;
    return {
      id: proiectEdit?.id,
      projectName: proiectEdit.projectName,
      description: proiectEdit.description,
      categoryId: proiectEdit.categoryId
    };
  },
  validationSchema: Yup.object().shape({

  }),
  handleSubmit: (values, { props, setSubmitting }) => {
      const action = {
        type: "UPDATE_PROJECT_SAGA",
        projectUpdate: values
      };
      // gọi saga 
      props.dispatch(action);
  },
  displayName: "EditProjectForm",
})(FormEditProject);

const mapStateToProps = (state) => ({
  
     proiectEdit: state.ProjectReducer.proiectEdit
  
});

export default connect(mapStateToProps)(EditProjectForm);

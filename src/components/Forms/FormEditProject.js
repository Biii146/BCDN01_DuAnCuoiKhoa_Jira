import React from 'react'

export default function FormEditProject(props) {
    return (
      <form className="container-fluid">
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <p className="font-weight-bold">Project ID</p>
              <input className="form-control" name="projectName" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <p className="font-weight-bold">Project Name</p>
              <input className="form-control" name="projectName" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <p className="font-weight-bold">Project category</p>
              <input className="form-control" name="projectName" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <p className="font-weight-bold">Project category</p>
              <input className="form-control" name="projectName" />
            </div>
          </div>
        </div>
      </form>
    );
}

import React from 'react'

export default function Info(props) {
    return (
      <div className="info" style={{ display: "flex" }}>
        <div className="search-block">
          <input className="search" />
          <i className="fa fa-search" />
        </div>
        <div className="avatar-group" style={{ display: "flex" }}>
          <div className="avatar">
            <img src={require("../../assets/Images/download (1).jfif").default} alt="" />
          </div>
          <div className="avatar">
            <img src={require("../../assets/Images/download (2).jfif").default} alt="" />
          </div>
          <div className="avatar">
            <img src={require("../../assets/Images/download (3).jfif").default} alt="" />
          </div>
        </div>
        <div style={{ marginLeft: 20 }} className="text">
          Only My Issues
        </div>
        <div style={{ marginLeft: 20 }} className="text">
          Recently Updated
        </div>
      </div>
    );
}

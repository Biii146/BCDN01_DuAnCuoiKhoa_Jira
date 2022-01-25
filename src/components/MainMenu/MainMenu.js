import React, { useEffect } from "react";
import Sidebar from '../SideBar/Sidebar';
import Content from './Content';
import Header from './Header';
import Info from './Info';
import '../../index.css'
import { useSelector, useDispatch } from "react-redux";

export default function MainMenu(props) {

      const { projectDetail } = useSelector((state) => state.ProjectReducer);
      const dispatch = useDispatch();

      console.log("projectDetail", projectDetail);

       useEffect(() => {
         //Khi người dùng link qua trang này bằng thẻ navlink hoặc người dùng tự gõ url thì ta sẽ lấy tham số từ url => gọi saga
         const { projectId } = props.match.params;
         dispatch({
           type: "GET_PROJECT_DETAIL",
           projectId,
         });
       }, []);

    return (
      <div className="main mt-5">
        <Header projectDetail={projectDetail} />
        <h3>{projectDetail.projectName}</h3>
        <Info members={projectDetail.members} />
        <Content />
      </div>
    );
}

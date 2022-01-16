import React from 'react'
import Sidebar from '../SideBar/Sidebar';
import Content from './Content';
import Header from './Header';
import Info from './Info';
import '../../index.css'

export default function MainMenu(props) {
    return (
      <div className="main mt-5">
        <Header />
        <h3>Cyber Board</h3>
        <Info />
        <Content />
      </div>
    );
}

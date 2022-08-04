import React from "react";
import todoLogo from '../../assets/todo_logo.png';

import { IconContext } from "react-icons";
import {FaPowerOff} from 'react-icons/fa';

// TODO: fixed navbar, bootstrap ?
const Header = () => (
    <header id="mainHeader" className="header-outer">
        <div className="header-inner">
            <img src={todoLogo} alt="todo logo check" id="headerLogo"/>
            <IconContext.Provider value={{ color: "#3d3d3d", size: "20px", className: "header-icon" }}>
                <a href="/" className="btn" title="Go to home"><FaPowerOff /></a>
            </IconContext.Provider>
        </div>
    </header>
)

export default Header;


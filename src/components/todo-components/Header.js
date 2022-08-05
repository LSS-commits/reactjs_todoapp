import React from "react";
import todoLogo from '../../assets/todo_logo.png';
import { IconContext } from "react-icons";
import {FaPowerOff} from 'react-icons/fa';
import { changeColorOnScroll } from "../../shared/Functions";

// change colors of elements on scroll (+ header shrinks with css code)
changeColorOnScroll();

const Header = () => (
    <header id="mainHeader" className="header-outer">
        <div className="header-inner responsive-wrapper">
            <div className="header-logo">
                <a href="/" title="Go to home"><img src={todoLogo} alt="todo logo check" id="headerLogo"/></a>
            </div>
            <a href="/" className="btn header-icon" title="Go to home">
                <IconContext.Provider value={{ color: "#3d3d3d", size: "20px" }}>
                    <FaPowerOff />
                </IconContext.Provider>
            </a>
        </div>
    </header>
)

export default Header;


import React from "react";
import { IconContext } from "react-icons";
import {FaListUl, FaCheck, FaPlus, FaTrashAlt} from 'react-icons/fa';
// to generate links compatible with React
import { NavLink } from "react-router-dom";

const Footer = () => (
    <footer className="d-flex justify-content-center p-3 fixed-bottom" id="mainFooter">
        <div className="btn-group">
            <IconContext.Provider value={{ color: "#3d3d3d"}}>
                <NavLink to="/todo/" className="btn" title="Go to list" type="button">List <FaListUl /></NavLink>
                <NavLink to="/todo/completed" className="btn" title="Go to completed tasks" type="button">Completed <FaCheck/></NavLink>
                <NavLink to="/todo/add-task" className="btn" title="Go to add a task" type="button">Add <FaPlus/></NavLink>
            </IconContext.Provider>
        </div>
            <IconContext.Provider value={{ color: "#FF6461", size: "20px"}}>
                <button className="btn trash pe-0" title="Delete" type="button"><FaTrashAlt /></button>
            </IconContext.Provider>
    </footer>
)

export default Footer;
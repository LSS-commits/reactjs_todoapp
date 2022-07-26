import React from "react";
import { IconContext } from "react-icons";
import {FaListUl, FaCheck, FaPlus, FaTrashAlt} from 'react-icons/fa';
// to generate links compatible with React
import { NavLink } from "react-router-dom";


const NavBar = () => (
    <footer className="d-flex justify-content-between p-3" id="mainFooter">
        <div className="btn-group">
            <IconContext.Provider value={{ color: "#3d3d3d"}}>
                {/* use NavLink to="" instead of a href="" with react router */}
                <NavLink to="/" className="btn">List <FaListUl /></NavLink>
                <NavLink to="/completed" className="btn">Completed <FaCheck/></NavLink>
                <NavLink to="/add-task" className="btn">Add <FaPlus/></NavLink>
            </IconContext.Provider>
        </div>
            <IconContext.Provider value={{ color: "#ffffff"}}>
                <button className="btn trash"><FaTrashAlt /></button>
            </IconContext.Provider>
    </footer>
)

export default NavBar;
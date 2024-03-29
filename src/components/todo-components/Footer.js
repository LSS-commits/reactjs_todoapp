import React from 'react';
import { IconContext } from 'react-icons';
import {FaListUl, FaCheck, FaPlus, FaTrashAlt} from 'react-icons/fa';
// to generate links compatible with React
import { NavLink } from 'react-router-dom';

const Footer = ({onDeleteCompleted}) => (
    <footer className="d-flex justify-content-center p-3 fixed-bottom" id="mainFooter">
        <div className="btn-group">
            <IconContext.Provider value={{ className: "footer-icons", color: "#3d3d3d"}}>
                <NavLink to="/todo/" className="btn" title="Go to list" type="button" exact={true}>List <FaListUl /></NavLink>
                <NavLink to="/todo/completed" className="btn" title="Go to completed tasks" type="button">Completed <FaCheck/></NavLink>
                <NavLink to="/todo/add-task" className="btn" title="Go to add a task" type="button" exact={true}>Add <FaPlus/></NavLink>
            </IconContext.Provider>
        </div>
            <IconContext.Provider value={{ color: "#3d3d3d", size: "20px"}}>
                <button className="btn trash pe-0" title="Delete" type="button" onClick={onDeleteCompleted}><FaTrashAlt /></button>
            </IconContext.Provider>
    </footer>
)

export default Footer;
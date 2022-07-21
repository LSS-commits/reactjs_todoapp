import React from "react";
import {FaListUl, FaCheck, FaPlus, FaTrashAlt} from 'react-icons/fa';


const NavBar = () => (
    <footer className="d-flex justify-content-between p-3" id="mainFooter">
        <div className="btn-group">
            <IconContext.Provider value={{ color: "#3d3d3d"}}>
                <a className="btn">List <FaListUl /></a>
                <a className="btn">Completed <FaCheck/></a>
                <a className="btn">Add <FaPlus/></a>
            </IconContext.Provider>
        </div>
            <IconContext.Provider value={{ color: "#ffffff"}}>
                <button className="btn"><FaTrashAlt /></button>
            </IconContext.Provider>
    </footer>
)

export default NavBar;
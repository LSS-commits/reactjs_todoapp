import React from "react";
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa';


const NavBar = () => (
    <footer className="d-flex justify-content-between p-3" id="mainFooter">
        <div className="btn-group">
            <a href="" className="btn">List <FaListAlt /></a>
            <a href="" className="btn">Completed <FaCheckSquare /></a>
            <a href="" className="btn">Add <FaPlusSquare /></a>
        </div>
        <button className="btn"><FaTrash /></button>
    </footer>
)

export default NavBar
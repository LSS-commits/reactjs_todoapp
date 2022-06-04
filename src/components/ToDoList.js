import React from "react";

const ToDoList = () => (
    <div>
        <ul className = "list-group m-3" >
            <h3 className = "list-group-item list-title" > Professional </h3> 
            <li className = "list-group-item d-flex align-items-center" >
            Study offers 
            <button className = "btn btn-sm ml-auto btn-info" > &#x2714; </button> 
            </li> 
            <li className = "list-group-item d-flex align-items-center" >
            Sign contract 
            <button className = "btn btn-sm ml-auto btn-info" > &#x2714; </button> 
            </li> 
            <li className = "list-group-item d-flex align-items-center" >
            Finish project roadmap 
            <button className = "btn btn-sm ml-auto btn-info" > &#x2714; </button> 
            </li> 
        </ul> 
        <ul className = "list-group m-3">
            <h3 className = "list-group-item list-title" > Personal </h3> 
            <li className = "list-group-item d-flex align-items-center">
            Wash dishes 
            <button className = "btn btn-sm ml-auto btn-info" > &#x2714; </button> 
            </li> 
            <li className = "list-group-item d-flex align-items-center">
            Cardio work out 
            <button className = "btn btn-sm ml-auto btn-info" > &#x2714; </button> 
            </li> 
            <li className = "list-group-item d-flex align-items-center">
            Do laundry 
            <button className = "btn btn-sm ml-auto btn-info" > &#x2714; </button> 
            </li> 
        </ul>
    </div>
)

export default ToDoList
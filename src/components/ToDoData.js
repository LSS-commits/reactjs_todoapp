import React from "react";

class ToDoData extends React.Component{
    render(){
        return(
            <li className = "list-group-item d-flex align-items-center" >  
             {this.props.task.name}
            <button className = "btn btn-sm ml-auto btn-info" > &#x2714; </button> 
            </li> 
        )
    }
}

export default ToDoData;
import React from "react";

class ToDo extends React.Component{
    render(){
        return(
                <li className = "list-group-item d-flex align-items-center">  
                    {this.props.task.name}
                    <button className = "btn btn-sm ml-auto completeBtn" > &#x2714; </button> 
                </li> 
            )
    }
}

export default ToDo;
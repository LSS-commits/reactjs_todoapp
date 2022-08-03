import React from "react";

class ToDo extends React.Component{
    render(){
        return(
                <li className="list-group-item d-flex align-items-center">  
                    {this.props.item.name}
                    <button className="btn btn-sm ml-auto completeBtn" type="button" title="Complete task"> &#x2714; </button> 
                </li> 
            )
    }
}

export default ToDo;
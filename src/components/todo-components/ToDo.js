import React from "react";

class ToDo extends React.Component{

    // initial value of completed state
    state = {
        completed: this.props.item.completed
    }

    /* to change value of completed property
    1) get previous state
    2) new value of completed state = opposite of actual value
    */
    toggleCompleted = () => {
        this.setState(previousState => ({
            completed: !previousState.completed
        }))
    }

    render(){
        return(
                <li className={"list-group-item d-flex align-items-center " + (this.state.completed ? 'bg-success text-white' : null)}>  
                    {this.props.item.name}
                    <button className={"btn btn-sm ml-auto " + (this.state.completed ? 'btn-success' : 'completeBtn')} type="button" title="Complete task" onClick={() => this.toggleCompleted()}>&#x2714;</button> 
                </li> 
            )
    }
}

export default ToDo;
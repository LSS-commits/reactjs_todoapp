import React from "react";

class AddTask extends React.Component {
    render(){
        return(
            <section id="addTask">
                <h1 className="m-3">New Task</h1>
                <div className="card my-5 mx-3">
                    <form className="card-body my-3 add-task-form" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group">   
                            <div className="form-floating">
                                <input type="text" className="form-control" name="taskName" id="floatingInput" placeholder="Insert task name" required ref={input => this.newTask = input} />
                                <label form="taskName" htmlFor="floatingInput">Task name</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success mt-3">Create</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default AddTask;
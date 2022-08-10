import React from "react";

// to get data from form input (via reference in input)
let newTask;
let category;

// to prevent page reload after form submission
const handleSubmit = (event) => {
    event.preventDefault();
    console.log('log : name => ' + newTask.value + ' and category => ' + category.value);
    // TODO: assign category to new task
    // TODO: reset form

}

const AddTask = ({titles}) => { 
    
    return (
        <>
            <section id="addTask">
                <h2 className="m-3">New Task</h2>
                <div className="card my-5 mx-3">
                    <form className="card-body my-3 add-task-form" onSubmit={event => handleSubmit(event)}>
                        <div className="form-group">   
                            <div className="form-floating">
                                <input type="text" className="form-control text-muted" name="taskName" id="floatingInput" placeholder="Insert task name" ref={input => newTask = input} required />
                                <label form="taskName" htmlFor="floatingInput">Task name</label>
                            </div>
                            {/* Pick category */}
                            <div className="input-group my-3">
                                <select className="form-select text-muted" id="inputGroupSelect03" aria-label="category select">
                                    <option className="" defaultValue>Pick a category...</option>
                                    {
                                        titles.map((title) => 
                                            <option value={title.name} key={title.id} ref={option => category = option}>{title.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn createBtn mt-3">Create</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AddTask;
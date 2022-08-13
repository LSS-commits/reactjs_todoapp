import React from "react";

// to get data from form input (via reference in input)
let taskName;
let taskCategory;

// to reset form
let taskForm;

// to prevent page reload and get form data after form submission
const handleSubmit = (event) => {
    event.preventDefault();
    console.log('log : name => ' + taskName.value + ' and category => ' + taskCategory.value);
  
    // share new task data within the app
    // this.props.onAddTask(taskName.value, taskCategory.value);
    console.log(this.props);
    // TODO: display notification

    // TODO: reset form after submit (or redirect and display notification on list page)
    // taskForm.reset();
}

const AddTask = ({titles}) => { 
    
        return (
            <>
                <section id="addTask">
                    <h2 className="m-3">New Task</h2>
                    <div className="card my-5 mx-3">
                        <form className="card-body my-3 add-task-form" onSubmit={event => handleSubmit(event)} ref={form => taskForm = form}>
                            <div className="form-group">   
                                <div className="form-floating">
                                    <input type="text" className="form-control text-muted" name="taskName" id="floatingInput" placeholder="Task name" ref={input => taskName = input} required />
                                    <label className="text-muted" form="taskName" htmlFor="floatingInput">Task name</label>
                                </div>
                                {/* Pick category */}
                                <div className="my-4">
                                    <label form="taskCategory">Pick a category</label>
                                    <select className="form-select text-muted my-2" id="inputGroupSelect03" aria-label="category select" ref={option => taskCategory = option} name="taskCategories">
                                        {
                                            titles.map((title) => 
                                                <option value={title.name} key={title.id}>{title.name}</option>
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
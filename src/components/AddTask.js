import React from "react";
import CategoryPick from "./CategoryPick";


const AddTask = ({titles}) => {
    return (
        <>
            <section id="addTask">
                <h2 className="m-3">New Task</h2>
                <div className="card my-5 mx-3">
                    <form className="card-body my-3 add-task-form" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group">   
                            <div className="form-floating">
                                <input type="text" className="form-control text-muted" name="taskName" id="floatingInput" placeholder="Insert task name" required />
                                {/* TODO: Put this back in input ref={input => this.newTask = input}  */}
                                <label form="taskName" htmlFor="floatingInput">Task name</label>
                            </div>
                            {/* Pick category */}
                            <div className="input-group my-3">
                                <select className="form-select text-muted" id="inputGroupSelect03" aria-label="category select">
                                    <option className="" defaultValue>Pick a category...</option>
                                    {
                                        titles.map((title) => 
                                        <CategoryPick title={title} key={title.id} />
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success mt-3">Create</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AddTask;
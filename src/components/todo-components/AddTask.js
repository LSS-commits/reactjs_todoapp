import React from "react";
import CategoryOption from "./CategoryOption";
import {categoryData} from '../../shared/DynamicData';


class AddTask extends React.Component{

    // to prevent page reload and get form data after form submission
    handleSubmit = (event) => {
   
    event.preventDefault();
    console.log('log : name => ' + this.taskName.value + ' and category => ' + this.taskCategory.value);

    // share new task data within the app
    // this.props.onAddTask(this.taskName.value, this.taskCategory.value);

    // TODO: display notification

    // TODO: reset form after submit (or redirect and display notification on list page)
    // this.taskForm.reset();
    
    }


    render(){
        return (
            <section id="addTask">
                <h2 className="m-3">New Task</h2>
                <div className="card my-5 mx-3">
                    <form className="card-body my-3 add-task-form" onSubmit={event => this.handleSubmit(event)} ref={form => this.taskForm = form}>
                        <div className="form-group">   
                            <div className="form-floating">
                                <input type="text" className="form-control text-muted" name="taskName" id="floatingInput" placeholder="Task name" ref={input => this.taskName = input} required />
                                <label className="text-muted" form="taskName" htmlFor="floatingInput">Task name</label>
                            </div>
                            {/* Pick category */}
                            <div className="my-4">
                                <label form="taskCategory">Pick a category</label>
                                <select className="form-select text-muted my-2" id="inputGroupSelect03" aria-label="category select" ref={option => this.taskCategory = option} name="taskCategories">
                                    <CategoryOption titles={categoryData}/>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn createBtn mt-3">Create</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default AddTask;
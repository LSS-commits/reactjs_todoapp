import React from "react";
import ToDo from "./ToDo";

// destructurate props to use only tasks created in DynamicData and called in App in the routes
const ToDoList = ({tasks, match}) => {

    return(
        
        // loop on taskData and display list of tasks by title
        tasks.map((task) => {

            /* filter list of tasks for each title 
            => if task is completed, display on /completed page
            => if not, display on / page */
            let filteredTasks;
            switch (match.params.filter) {
                case 'completed':
                    filteredTasks = task.list.filter(item => item.completed);
                    break;
                default:
                    filteredTasks = task.list;
            }
            /* do not use fragments if you already have a parent element (eg, ul or div), else unique id (key) is needed on the element */
            if (filteredTasks.length === 0) {
                return (
                        <ul className="list-group m-3" key={task.id}>
                            <li className="list-group-item list-title fs-5">{task.title}</li>
                            <li className="list-group-item text-muted fst-italic no-task">No task completed</li>
                        </ul>
                )
            } else {
                return (
                        <ul className="list-group m-3" key={task.id}>
                            <li className="list-group-item list-title fs-5">{task.title}</li> 
                            {
                                filteredTasks.map((item) => <ToDo key={item.taskId} item={item}/>)
                            }
                        </ul>
                )
            }
            // end else
        })
        // end tasks map

    );
    // end todolist return

}

export default ToDoList;  
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

                if (filteredTasks.length === 0) {
                    return (
                        <>
                            <ul className="list-group m-3" key={task.id}>
                                <h3 className="list-group-item list-title">{task.title}</h3>
                                <p className="text-muted fst-italic">No task completed</p>
                            </ul>
                        </>
                    )
                } else {
                    return (
                        <>
                            <ul className="list-group m-3" key={task.id}>
                                <h3 className="list-group-item list-title">{task.title}</h3> 
                                {
                                    filteredTasks.map((item) => <ToDo key={item.taskId} item={item}/>)
                                }
                            </ul>
                        </>
                    )
                }
                // end else
            })
            // end tasks map

        );
        // end todolist return

}

export default ToDoList;  
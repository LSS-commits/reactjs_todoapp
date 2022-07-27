import React from "react";
import ToDo from "./ToDo";

// destructurate props to use only tasks created in DynamicData and called in App in the routes
const ToDoList = ({tasks, titles, match}) => {
    // filtered tasks = completed or not
    let filteredTasks;
    switch (match.params.filter) {
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed);
            break;
        default:
            filteredTasks = tasks;
    };
    
    if(filteredTasks.length === 0){
        return (
            <>
                <ul className = "list-group m-3">
                    <h3 className = "list-group-item list-title" > No task completed </h3> 
                </ul>
            </>
        )
    }else{
        return (
            /* <React.Fragment></React.Fragment>
            or <></> to wrap all elements into one
            */
            <>
                {
                    // for each category title, display list of tasks with the corresponding category
                    titles.map((title) => 
                        <ul className = "list-group m-3" key={title.id}>
                            <h3 className = "list-group-item list-title" > {title.name} </h3> 
                            {  
                            /* map in js function from the Array Object that enables you to execute a function for each element of an array */
                                filteredTasks.map((task) => 
                                    {
                                        if(task.category === title.name){
                                            return <ToDo task={task} key={task.id} />
                                        }else{
                                            return ''
                                        }
                                    }
                                )
                            }
                        </ul> 
                    )
                }
                    
            </>
        )
    }
}

export default ToDoList;





import React from "react";
import ToDoData from "./ToDoData";

// destructurate props to use only tasks created in DynamicData and called in App in the routes
const ToDoList = ({tasks, titles}) => (
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
                        tasks.map((task) => 
                            {
                                if(task.category === title.name){
                                    return <ToDoData task={task} key={task.id} />
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

export default ToDoList;





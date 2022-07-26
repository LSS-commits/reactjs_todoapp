import React from "react";
import ToDoData from "./ToDoData";

// destructurate props to use only tasks created in DynamicData and called in App in the routes
const ToDoList = ({tasks}) => (
    /* <React.Fragment></React.Fragment>
    or <></> to wrap all elements into one
    */
    <>
            {/* <li className = "list-group-item d-flex align-items-center" >
            Study offers 
            <button className = "btn btn-sm ml-auto btn-info" > &#x2714; </button> 
            </li> 
            <li className = "list-group-item d-flex align-items-center" >
            Sign contract 
            <button className = "btn btn-sm ml-auto btn-info" > &#x2714; </button> 
            </li> 
            <li className = "list-group-item d-flex align-items-center" >
            Finish project roadmap 
            <button className = "btn btn-sm ml-auto btn-info" > &#x2714; </button> 
            </li>  */}

        <ul className = "list-group m-3">
            <h3 className = "list-group-item list-title" > Professional </h3> 
            {  
            /* map in js function from the Array Object that enables you to execute a function for each element of an array */
                tasks.map((task) => 
                {
                    if(task.category === "Professional"){
                        return <ToDoData task={task} />
                    }
                })

            }
        </ul> 
            

        <ul className = "list-group m-3">
            <h3 className = "list-group-item list-title" > Personal </h3> 
            {  
                /* map in js function from the Array Object that enables you to execute a function for each element of an array */
                    tasks.map((task) => 
                    {
                        if(task.category === "Personal"){
                            return <ToDoData task={task} />
                        }
                    })

                }
        </ul> 
    </>
)

export default ToDoList;
import React from 'react';
import Header from './todo-components/Header';
import Footer from './todo-components/Footer';
import ToDoList from './todo-components/ToDoList';
import AddTask from './todo-components/AddTask'

// to use react router dom v5.3.0 (v6 doesn't work for this tutorial)
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// to import my dynamic data
import {initialData} from '../shared/Data';

// to change colors of header elements on scroll (+ header shrinks with css code)
import { changeColorOnScroll } from "../shared/Functions";

// to generate unique ids for tasks
import uniqid from "uniqid";


class ToDoPages extends React.Component {
    
    /* to create a version of tasks in the state of this component */
    state = {
        tasks: initialData
    }

    /* to toggle the state of completion of the tasks */
    onToggleCompleted = (taskID) => {

        // map on tasks to get list of tasks by category
        this.state.tasks.map((tasksByCategory) => {
            
            let taskToUpdate = tasksByCategory.list.find(task => task.taskId === taskID);

            /* taskToUpdate can be undefined because map tries to find a matching id loops in each list of tasks, so condition = if taskToUpdate is defined */
            if (taskToUpdate) {
                // reverse value of completed
                taskToUpdate.completed = !taskToUpdate.completed;

                /* save new state of task in the app's state or keep the previous one */
                this.setState(previousState => (
                    previousState.tasks.map(task => {
                        return task.taskId === taskID ? taskToUpdate : task;
                    })
                )) 
            }
            // end if

            return taskToUpdate;
        })
        // end map
    };
    // end function onToggleCompleted
    
    /* to create a new task */
    onAddTask = (newTaskName, newTaskCategory) => {

        // create new task object
        let newTask = {
            /* generate unique id using dependency */
            taskId: uniqid(), 
            name: newTaskName,
            completed: false,
            category: newTaskCategory
        };

        // inject new task in the state of the app
        // 1) find object (in tasks) where title === newTaskCategory
        let categoryObject = this.state.tasks.find(category => category.title === newTaskCategory);

        // 2) update state.tasks
        this.setState(previousState => ({
            tasks: previousState.tasks.map(
                item => categoryObject.id === item.id? {id: item.id, title: item.title, list:[...item.list, newTask]}: item
            )
        }));
    };
    // end function onAddTask

    /* to delete a completed task */
    onDeleteCompleted = () => {
        // filter to keep only the tasks that aren't completed
        this.setState(previousState => ({
            tasks: previousState.tasks.map(
                item => {
                    let newListState = item.list.filter(task => !task.completed)
                    return {id: item.id, title: item.title, list: newListState}
                }
            )
        }));
    };
    // end function onDeleteCompleted

    render(){
        return(
            <section id="todo">
                {/* REACT STRICT MODE 18 IS INCOMPATIBLE WITH REACT 5, PB WITH NAVIGATION */}
                {/* <React.StrictMode> */}
                    <BrowserRouter>
                        <Header changeColorOnScroll={changeColorOnScroll()}/>
                        <div id="pageContent">
                            <Switch>
                                <Route path="/todo/add-task" render={(props) => <AddTask {...props} onAddTask={this.onAddTask}/>}/>
                                {/* <Route path="/add-task" component={AddTask}/> */}
                                {/* /:filter? to display only tasks that match the completed filter (Props > match > params > filter ) after click on button Completed. DOESN'T WORK WITH react-router-dom v6, with v5.3 ok */}
                                <Route path="/todo/:filter?" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted}/>}/>
                            </Switch>
                        </div>
                        <Footer onDeleteCompleted={this.onDeleteCompleted}/>
                    </BrowserRouter>
                {/* </React.StrictMode> */}
            </section>   
        )
    }
}

export default ToDoPages;
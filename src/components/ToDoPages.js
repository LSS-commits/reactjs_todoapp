import React from 'react';
import Header from './todo-components/Header';
import Footer from './todo-components/Footer';
import ToDoList from './todo-components/ToDoList';
import AddTask from './todo-components/AddTask'

// to use react router dom v5.3.0 (v6 doesn't work for this tutorial)
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// to import my dynamic data
import {categoryData, initialData} from '../shared/DynamicData';
// to import custom functions
import {changeLayout} from '../shared/Functions';

// to set margin bottom on page content on page load
changeLayout();


class ToDoPages extends React.Component {
    

    state = {
        tasks: initialData
    }

    /* to create a new version of tasks property in the state of this component */
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
    }
    // end function onToggleCompleted
    

    render(){
        return(
            <section id="todo">
                {/* REACT STRICT MODE 18 IS INCOMPATIBLE WITH REACT 5, PB WITH NAVIGATION */}
                {/* <React.StrictMode> */}
                    <BrowserRouter>
                        <Header />
                        <div id="pageContent">
                            <Switch>
                                <Route path="/todo/add-task" render={(props) => <AddTask {...props} titles={categoryData} />}/>
                                {/* <Route path="/add-task" component={AddTask}/> */}
                                {/* /:filter? to display only tasks that match the completed filter (Props > match > params > filter ) after click on button Completed. DOESN'T WORK WITH react-router-dom v6, with v5.3 ok */}
                                <Route path="/todo/:filter?" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted}/>}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </BrowserRouter>
                {/* </React.StrictMode> */}
            </section>   
        )
    }
}

export default ToDoPages;
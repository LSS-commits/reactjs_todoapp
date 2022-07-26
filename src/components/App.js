import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import AddTask from './AddTask';
// to display images with webpack, via import statement
import todoLogo from '../assets/todo_logo.png';
import todoImg from '../assets/todo_img.png';
// to use react router dom v5.3.0 (v6 doesn't work for this tutorial)
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// to import my dynamic data
import {categoryData, taskData}  from '../DynamicData';

class App extends React.Component {
    render(){
        return(
            <section id="todo">
                <div className="banner">
                    <img src={todoLogo} alt="todo check" />
                    <h1>My ToDo App</h1>
                    <img src={todoImg} alt="todo people" />
                </div>
                <React.StrictMode>
                    <BrowserRouter>
                        <Switch>
                            {/* when url = add task, display add task component */}
                            <Route path="/add-task" component={AddTask} />
                            {/* /:filter? to display only tasks that match the completed filter (Props > match > params > filter ) after click on button Completed DOESN'T WORK WITH react-router-dom v6, with v5.3 ok */}
                            <Route path="/:filter?" render={(props) => <ToDoList {...props} titles={categoryData} tasks={taskData}/>}/>
                        </Switch>
                        <NavBar/>
                    </BrowserRouter>
                </React.StrictMode>
            </section>   
        )
    }
}

export default App;
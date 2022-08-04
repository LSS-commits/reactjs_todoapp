import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import ToDoList from './ToDoList';
import AddTask from './AddTask';
// to display images with webpack, via import statement
import todoLogo from '../assets/todo_logo.png';
import todoImg from '../assets/todo_img.png';
// to use react router dom v5.3.0 (v6 doesn't work for this tutorial)
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// to import my dynamic data
import {categoryData, taskData} from '../DynamicData';
// to import custom functions
import {shrinkFunction} from '../Functions';

// to shrink banner on scroll
shrinkFunction();

class App extends React.Component {
    render(){
        return(
            <section id="todo">
                <div className="banner" id="todoBanner">
                    <img src={todoLogo} alt="todo check" id="todoLogo"/>
                    <h1 id="todoTitle">my ToDo App</h1>
                    <img src={todoImg} alt="todo people" id="todoImg"/>
                </div>
                {/* REACT STRICT MODE 18 IS INCOMPATIBLE WITH REACT 5, PB WITH NAVIGATION */}
                {/* <React.StrictMode> */}
                    <BrowserRouter>
                        <div id="pageContent">
                            <Switch>
                                <Route path="/todo/add-task" render={(props) => <AddTask {...props} titles={categoryData} />}/>
                                {/* <Route path="/add-task" component={AddTask}/> */}
                                {/* /:filter? to display only tasks that match the completed filter (Props > match > params > filter ) after click on button Completed. DOESN'T WORK WITH react-router-dom v6, with v5.3 ok */}
                                <Route path="/todo/:filter?" render={(props) => <ToDoList {...props} tasks={taskData}/>}/>
                                <Route path="/" component={Home}/>
                            </Switch>
                        </div>
                        <NavBar/>
                    </BrowserRouter>
                {/* </React.StrictMode> */}
            </section>   
        )
    }
}

export default App;
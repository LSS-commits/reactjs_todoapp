import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import AddTask from './AddTask';
// to display images with webpack, via import statement
import todoLogo from '../assets/todo_logo.png';
import todoImg from '../assets/todo_img.png';
// to use react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// to import my dynamic data
import {initialData, IDtitles} from '../initialData';

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
                        <Routes>
                            {/* when url = add task, display add task component */}
                            <Route path="/add-task" element={<AddTask />}/>
                            {/* /:filter? to display only tasks that match the completed filter (Props > match > params > filter ) after click on button Completed DOESN'T WORK WITH react-router-dom v6, with v5.3 ok */}
                            {/* <Route path="/" element={<ToDoList />}/> */}
                            <Route path="" render={(props) => <ToDoList {...props} tasks={initialData} titles={IDtitles}/> } element={<ToDoList />}/>
                        </Routes>
                        <NavBar/>
                    </BrowserRouter>
                </React.StrictMode>
            </section>   
        )
    }
}

export default App;
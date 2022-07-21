import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import AddTask from './AddTask';
// to display images with webpack, via import statement
import todoLogo from '../assets/todo_logo.png';
import todoImg from '../assets/todo_img.png';
// to use react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
                            {/* /:filter to display only tasks that match the completed filter (Props > match > params > filter ) after click on button Completed */}
                            <Route path="/" element={<ToDoList />}/>
                        </Routes>
                        <NavBar/>
                    </BrowserRouter>
                {/* <ToDoList/>
                 Now use with routing */}
                </React.StrictMode>
            </section>   
        )
    }
}

export default App;
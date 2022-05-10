import React from 'react';
// Pour afficher images grâce à webpack, via import statement
import todoLogo from '../assets/todo_logo.png';
import todoImg from '../assets/todo_img.png';
import ToDoList from './ToDoList';
import NavBar from './NavBar';

class ToDoApp extends React.Component {
    render(){
        return(
            <section id="todo">
                <div className="banner">
                    <img src={todoLogo} alt="todo check" />
                    <h1>My ToDo App</h1>
                    <img src={todoImg} alt="todo people" />
                </div>
                <ToDoList />
                <NavBar />
            </section>   
        )
    }
}

export default ToDoApp;
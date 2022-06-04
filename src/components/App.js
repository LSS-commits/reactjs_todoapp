import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
// To display images with webpack, via import statement
import todoLogo from '../assets/todo_logo.png';
import todoImg from '../assets/todo_img.png';

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
                <ToDoList/>
                <NavBar/>
                </React.StrictMode>
            </section>   
        )
    }
}

export default App;
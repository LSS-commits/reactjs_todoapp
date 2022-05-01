import React from 'react';
// Ancienne méthode
// import ReactDOM from 'react-dom/client';
// Depuis React 18
import { createRoot } from 'react-dom/client';
// Import de Bootstrap et icônes FontAw
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main_styles.less';
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa';
// Pour afficher images grâce à webpack, via import statement
import todoLogo from './assets/todo_logo.png';
import todoImg from './assets/todo_img.png';

class ToDoApp extends React.Component {
    render(){
        return(
            <section id="todo">
                <div className="banner">
                    <img src={todoLogo} alt="todo check" />
                    <h1>My ToDo App</h1>
                    <img src={todoImg} alt="todo people" />
                </div>
                <ul className="list-group m-3">
                    <h3 className="list-group-item list-title">Professional</h3>
                    <li className="list-group-item d-flex align-items-center">
                        Study offers
                        <button className="btn btn-sm ml-auto btn-info">&#x2714;</button>
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                        Sign contract
                        <button className="btn btn-sm ml-auto btn-info">&#x2714;</button>
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                        Finish project roadmap
                        <button className="btn btn-sm ml-auto btn-info">&#x2714;</button>
                    </li>
                </ul>
                <ul className="list-group m-3">
                    <h3 className="list-group-item list-title">Personal</h3>
                    <li className="list-group-item d-flex align-items-center">
                        Wash dishes
                        <button className="btn btn-sm ml-auto btn-info">&#x2714;</button>
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                        Cardio work out
                        <button className="btn btn-sm ml-auto btn-info">&#x2714;</button>
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                        Do laundry
                        <button className="btn btn-sm ml-auto btn-info">&#x2714;</button>
                    </li>
                </ul>
                <footer className="d-flex justify-content-between p-3" id="mainFooter">
                    <div className="btn-group">
                        <a href="#" className="btn">List <FaListAlt /></a>
                        <a href="#" className="btn">Completed <FaCheckSquare /></a>
                        <a href="#" className="btn">Add <FaPlusSquare /></a>
                    </div>
                    <button className="btn"><FaTrash /></button>
                </footer>
            </section>   
        )
    }
}

// Ancienne méthode 
// ReactDOM.render(
//     <ToDoApp />, document.getElementById('root')
// )

// Nouvelle méthode pour injecter dans le DOM (à partir de React 18)
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <React.StrictMode>
    <ToDoApp />
    </React.StrictMode>
)
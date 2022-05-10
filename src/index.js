import React from 'react';
// Ancienne méthode
// import ReactDOM from 'react-dom/client';
// Depuis React 18
import { createRoot } from 'react-dom/client';
// Import de Bootstrap et icônes FontAw
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ToDoApp.css';
import ToDoApp from './components/ToDoApp';



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
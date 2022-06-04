import React from 'react';
// since React 18
import { createRoot } from 'react-dom/client';
import App from './components/App';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)
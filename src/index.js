import React from 'react';
// since React 18
import { createRoot } from 'react-dom/client';
import App from './components/App';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/ResponsiveApp.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    // REACT STRICT MODE 18 IS INCOMPATIBLE WITH REACT 5, PB WITH NAVIGATION
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
)
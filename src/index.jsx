import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);
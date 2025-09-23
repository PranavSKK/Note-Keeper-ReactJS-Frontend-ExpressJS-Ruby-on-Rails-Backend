import { React, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from "./components/App.jsx";
import Login from "./components/Login.jsx"
import "./index.css"

createRoot(document.getElementById('root')).render(
    <Login />
)

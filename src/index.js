import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';
import App from './App';
import { get_firestore_app } from './firebase/config';


get_firestore_app();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

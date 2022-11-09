import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoContaniner from './TodoComponents/TodoContainer';
import "./Apps.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <TodoContaniner />
  </React.StrictMode>
);



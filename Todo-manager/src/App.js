import React from 'react';
import './App.css';
import './components/TodoForm.js';

import TodoList from './components/TodoList.js';

function App() {
  return (
    <div className="todo-app">
      <h1>Task Manager</h1>
      <TodoList/>
    </div>
  );
}

export default App;

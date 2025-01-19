import React from 'react';
import './App.css';
import axios from 'axios';
import Todo from './containers/todos'

function App() {
  axios.defaults.baseURL = 'http://localhost:3001/';

  return (
    <Todo />
  );
}

export default App;

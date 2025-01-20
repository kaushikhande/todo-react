import React from 'react';
import './App.css';
import axios from 'axios';
import Todo from './containers/todos'

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

  return (
    <Todo />
  );
}

export default App;

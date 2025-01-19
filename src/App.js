import React from 'react';
import './App.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  axios.defaults.baseURL = 'http://localhost:3001/';

  const handleToggle = (todo) => () => {
    console.log(todo)
  };

  const fetchtodos = async () => {
    const response = await axios.get('api/v1/todos',
    {
      headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3MzczNjQ3ODh9.cCmwh9Bu-XDITZbyqI2ZqHfu-TQ2XW1xo-JMNL5R2cA"}
    } );
    setTodos(response.data.todos);
  };

  useEffect(() => {
    fetchtodos();
  }, []);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => {
        const labelId = `checkbox-list-label-${todo.id}`;

        return (
          < ListItem key={todo.id} >
            <ListItemButton onClick={handleToggle(todo)} >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={false}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${todo.title}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default App;

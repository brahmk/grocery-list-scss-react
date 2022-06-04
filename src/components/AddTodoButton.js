import { Button, Fab } from '@mui/material';
import { useContext } from 'react';
import { ToDoListContext } from '../context/ToDoContext';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


export const AddToDoButton = () => {
  const { input, toDoList, setToDoList, setInput } =
    useContext(ToDoListContext);

  const onClick = () => {
    if (!input) {
      return;
    }
    const newList = [...toDoList, input];
    setToDoList(newList);
    setInput('');
  };

  return ( <>
    <div className='add-todo-button-container'>
     <Fab size="small" color="secondary" aria-label="add" onClick={onClick}><ControlPointIcon color='white'/></Fab>
  
    </div>
    </>
  );
};
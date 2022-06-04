import { CheckCircle } from '@mui/icons-material';
import { IconButton, List, ListItem } from '@mui/material';
import { useContext } from 'react';
import { ToDoListContext } from '../context/ToDoContext';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const ToDoList = () => {
  const { toDoList, setToDoList } = useContext(ToDoListContext);

  const removeItem = (index) => {
    toDoList.splice(index, 1);
    setToDoList([...toDoList]);
  };

  return (
    <List id="list">
      {toDoList.map((item, i) => {
        return (
          <ListItem class="list-item" key={item}>
            {item}
            <IconButton onClick={() => removeItem(i)}>
              <CheckBoxIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
};
import { Input } from '@mui/material';
import { useContext } from 'react';
import { ToDoListContext } from '../context/ToDoContext';

export const InputBox = () => {
  const { input, setInput } = useContext(ToDoListContext);

  return (
    <Input id="input"
      placeholder='Groceries'
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};
import { ToDoListContextProvider } from './context/ToDoContext';
import { InputBox } from './components/Input';
import { AddToDoButton } from './components/AddTodoButton';
import { ToDoList } from './components/ToDoList';
import {
  Button,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
} from '@mui/material';
import './scss/app.scss';

const theme = createTheme({
  typography: {
    fontFamily: `'Noto Sans', sans-serif`,
    fontWeightRegular: 600,
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#95a398',
    },
    primary: {
      main: '#88b895',
    },
    secondary: {
      main: '#88b895',
    },
  },
});

function App() {
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToDoListContextProvider>
          <div className='input-container'>
            <InputBox /><AddToDoButton />
            
          </div>
          <ToDoList />
        </ToDoListContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

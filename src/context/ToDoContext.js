import { useState, createContext } from "react";

export const ToDoListContext = createContext({});

export const ToDoListContextProvider = ({children}) => {

const {Provider} = ToDoListContext;
const [input, setInput] = useState('')
const [toDoList, setToDoList] = useState([]);

const value = {
    input, setInput,toDoList,setToDoList
}
return <Provider  value={value}>{children}</Provider>
}
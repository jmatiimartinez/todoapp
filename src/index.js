//Import the React and ReactDOM libraries
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import style from './index.css';

const App = () => {
    //State stuff
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    //RUN ONCE when the app start
    useEffect(() => {
      getLocalTodos();
    }, []);
    //USE EFFECT
    useEffect(() => {
      filterHandler()
      saveLocalTodos()
    }, [todos, status]);

    //functions
    const filterHandler = () =>{
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true ))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false ))
          break;
        default:
          setFilteredTodos(todos);
          break;
        }
    }

    //Save to local
    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
       let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
      } 
    }


    return (
      <div>
          <header>
            <h1>To Do's List</h1>
          </header>
          <Form 
          inputText={inputText}
          todos={todos} 
          setInputText={setInputText} 
          setTodos={setTodos}
          setStatus={setStatus}/>
          <ToDoList
           filteredTodos={filteredTodos}
           todos={todos}
           setTodos={setTodos}
           />
      </div>
    );
};

//Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <ToDo 
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos} 
                    key={todo.id} 
                    text={todo.text} 
                    id={todo.id}/>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;

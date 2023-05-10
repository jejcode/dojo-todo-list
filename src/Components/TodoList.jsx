import React from "react";

const TodoList = (props) => {
    const {todoList, deleteTodo} = props
    
    const toggleCompletion = (condition, index) => {
        todoList[index].completed = condition
        condition ?
        document.getElementById(`todo${index}`).style.textDecoration = 'line-through'
        : document.getElementById(`todo${index}`).style.textDecoration = 'none'
        

    }

    return (
        <ul>
            {todoList.map((todo,index) => 
                <li key={ index } className="mb-4 d-flex align-items-center">
                    <span id={`todo${index}`}>{todo.name}</span>
                    <input type="checkbox" className="form-check-input mx-3" onClick={ (e) => toggleCompletion(e.target.checked, index) } />
                    <button className="btn btn-warning" onClick={() => {deleteTodo(todo)}}>Delete</button>
                </li>
            )}

        </ul>
    )
}

export default TodoList
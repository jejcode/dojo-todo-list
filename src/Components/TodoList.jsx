import React from "react";
import styles from './TodoList.module.css'

const TodoList = (props) => {
    const {todoList, deleteTodo, toggleCompletion} = props
    return (
        todoList.map((todo, index) => {
            return (
                <div key={index} className="mb-2 d-flex align-items-center">
                    <span className={todo.completed ? styles.completed : styles.incomplete}>{todo.name}</span>
                    <input type="checkbox" className="form-check-input mx-3" onChange={ (e) => toggleCompletion(index)} checked={todo.completed}/>
                    <button className="btn btn-warning" onClick={() => {deleteTodo(index)}}>Delete</button>
                </div>
            )
        })
    )
}

export default TodoList
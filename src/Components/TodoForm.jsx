import React, {useState} from "react";
const TodoForm = (props) => {
    const {addTodo} = props
    const [newTodo, setNewTodo] = useState("")
    const addNewTodoToList = (e) => {
        e.preventDefault()
        const todoData = {
            name: newTodo,
            completed: false
        }
        addTodo(todoData)
        setNewTodo("")
    }
    return (
        <form onSubmit={ addNewTodoToList }>
            <input className="form-input me-2"  onChange={ (e) => setNewTodo(e.target.value) } type="text" size="50" placeholder="Type your todo item here..." value={ newTodo }/>
            <input className="btn btn-primary" type="submit" value="Add" />
        </form>
    )
}

export default TodoForm
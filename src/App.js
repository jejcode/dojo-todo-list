import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React, { useState, useEffect } from "react"
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) || [])
  const addTodo = (todo) => {
    setTodoList([...todoList, todo])
  }
  const toggleCompletion = (index) => {
    const updatedTodoList = todoList.map( (todo, i) => {
      if(index === i) {
        const updatedTodo = {...todo, completed: !todo.completed}
        return updatedTodo
      }
      return todo
    })
    setTodoList(updatedTodoList)
  }
  

  const deleteTodo = (delIndex) => {
    setTodoList(todoList.filter((t,i) => i !== delIndex))
  }
  
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
})

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col">
          <TodoForm addTodo={ addTodo }/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TodoList todoList={ todoList } deleteTodo={ deleteTodo } toggleCompletion={ toggleCompletion }/>
        </div>
      </div>
    </div>
  );
}

export default App;

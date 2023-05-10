import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useState } from "react"
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([])

  const addTodo = (todo) => {
    setTodoList([...todoList, todo])
  }

  const deleteTodo = (todo) => {
    setTodoList(todoList.filter(t => t.name !== todo.name))
  }

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col">
          <TodoForm addTodo={ addTodo }/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TodoList todoList={ todoList } deleteTodo={ deleteTodo }/>
        </div>
      </div>
    </div>
  );
}

export default App;

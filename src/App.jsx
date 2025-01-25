import { useEffect, useState } from "react"
import { TodoProvider } from "./Contexts/TodoContext"
import TodoForm from "./Components/TodoForm";
import TodoItems from "./Components/TodoItems";
import "./index.css"



function App() {
  
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])
  return (
    <TodoProvider value={{ addTodo, updateTodo, deleteTodo, toggleComplete }}>
          <div className='main'>
            <div className='container'>
              <h1>
                  Manage your todos.....
              </h1>
              <div >
                  <TodoForm/>
              </div>
              <div className=''>
                  {todos.map((todo)=>(
                    <div key={todo.id}
                    className=''
                    >
                      <TodoItems todo={todo}/>
                    </div>
                  ))}
              </div>
            </div>
          </div>
    </TodoProvider>
  )
}

export default App

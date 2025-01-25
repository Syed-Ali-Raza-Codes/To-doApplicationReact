import React, { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";

function TodoItems({ todo }) {
    const style = { border:'2px solid black'}
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        //console.log(todo.id);
        toggleComplete(todo.id)
      }
    return (
        <div className='todo-style'>
            <input
                type="checkbox"
                className='checkbox'
                checked={todo.completed}
                onChange={toggleCompleted}

            />
            <input
                type="text"
                value={todoMsg}
                readOnly={!isTodoEditable}
                onChange={(e) => { setTodoMsg(e.target.value) }}
                className='todo-item'

            />

            <button
                className='btns'
                onClick={() => {
                    if (todo.completed) return
                    if (isTodoEditable) {
                        editTodo();
                    }
                    else setIsTodoEditable((prev) => !prev)

                }}
            >

                {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button
                className="btns"
                onClick={()=> deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    )
}

export default TodoItems;
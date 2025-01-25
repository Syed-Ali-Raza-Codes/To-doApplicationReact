import React, { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";


function TodoForm() {
   

    const [todo, setTodo] = useState()
    const {addTodo} = useTodo()

    const add = (e) =>{
        e.preventDefault()
        if(!todo) return 

        addTodo({todo, completed:false})
        setTodo("")
    }
    return (
        <form onSubmit={add} className=''>
            <input
                className='form-style'
                type="text"
                placeholder="Write todo....."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className='btn-style'>
                Add
            </button>
        </form>
    )
}

export default TodoForm;
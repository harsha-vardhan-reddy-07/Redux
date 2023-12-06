import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { removeTodo } from './todoSlice'


const DisplayTodos = () => {

  // useSelect()  is a react-redux method to fetch data from store.

  // useDispatch() is used to call the reducer function.
  // it follows the following pattern, dispatch(reducerFunction(actionPayload))

    const todos = useSelector((state)=> state.todos);

    const dispatch = useDispatch();

  return (
    <div>
        <h3>DisplayTodos</h3>

        {todos.map((todo)=>(
            <li key={todo.id}>
                {todo.text}
                <button onClick={()=> dispatch(removeTodo(todo.id))}>Remove</button>
             </li>
        ))}

    </div>
  )
}

export default DisplayTodos
import { createSlice, nanoid } from "@reduxjs/toolkit";


// slice is a functionality in redux toolkit, that involves reducer in it. 
// This makes it simpler and better than traditional redux.


// initial state can be an array, object or any other thing. 
// here, we consider the initialState as an object and take one key-value init.
const initialState = {
    todos: [
        {
            id: 1, 
            text: "Helloo"
        }
    ]
}

// createSlice takes majorly 3 attributes => name, initialState and reducers (here reducers is an object with keys as reducer function names and values as reducer functions).
// in reducers, we add various reducer functions.

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },

        removeTodo: (state, action)=>{
            state.todos = state.todos.filter(todo=> todo.id !== action.payload)
        },
    }
}) 

// We export reducer functions to use them where ever we wish.
// Also we export whole reducer object to add it to our store.

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;

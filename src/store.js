import { configureStore } from "@reduxjs/toolkit";

import todoReducer from './todoSlice'

// in store configuration, we provide the reducers object, which we've defined in slice.

export const store = configureStore({
    reducer: todoReducer
});
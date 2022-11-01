import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth.slice';
import { todoReducer } from './todo/todo.slice';

// redux-thunk, redux-saga, redux-rxjs

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
  }
})

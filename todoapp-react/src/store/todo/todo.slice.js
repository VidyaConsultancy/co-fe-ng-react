import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    isFetching: false,
    error: null,
  },
  reducers: {
    getAllTodo: (state, action) => {
      state.todos = action.payload.todos;
    }
  }
})

export const { getAllTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;

/* const reducer = (state = { isFetching: false }, action) => {
  if(action.type === 'something') {
    return { ...state, todos: action.payload.todos }
  }
} */

import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../../services/todos.service';

const calCompletedTodos = (t) => {
  const completed = t.filter((todo) => todo.isCompleted);
  return completed.length;
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    isFetching: false,
    error: null,
    completed: 0
  },
  reducers: {
    fetchAllStart: (state) => {
      state.isFetching = true;
    },
    fetchAllSuccess: (state, action) => {
      state.todos = action.payload.todos;
      state.isFetching = false;
      state.completed = calCompletedTodos(state.todos);
    },
    fetchAllFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.error;
    },
    addTodoStart: (state) => {
      state.isFetching = true;
    },
    addTodoSuccess: (state, action) => {
      state.isFetching = false;
      state.todos = [...state.todos, action.payload.todo];
      state.completed = calCompletedTodos(state.todos);
    },
    addTodoFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.error;
    },
    updateTodoStart: (state) => {
      state.isFetching = true;
    },
    updateTodoSuccess: (state, action) => {
      state.isFetching = false;
      const updatedTodo = action.payload.todo;
      const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
      if (index >= 0) {
        const updatedTodos = [...state.todos];
        updatedTodos.splice(index, 1, updatedTodo);
        state.todos = updatedTodos;
        state.completed = calCompletedTodos(state.todos);
      }
    },
    updateTodoFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.error;
    },
    deleteTodoSuccess: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.todoId)
      state.completed = calCompletedTodos(state.todos);
    }
  }
})

export const { fetchAllFailure, fetchAllStart, fetchAllSuccess, addTodoStart, addTodoFailure, addTodoSuccess, updateTodoFailure, updateTodoStart, updateTodoSuccess, deleteTodoSuccess } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
export const initialState = todoSlice.getInitialState();

/* const reducer = (state = { isFetching: false }, action) => {
  if(action.type === 'something') {
    return { ...state, todos: action.payload.todos }
  }
} */

export const fetchAllTodos = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchAllStart());
      const res = await fetchTodos();
      dispatch(fetchAllSuccess({ todos: res.data }));
    } catch (e) {
      dispatch(fetchAllFailure({ error: e }));
    }
  }
}

export const addNewTodo = (todo) => {
  return async (dispatch) => {
    try {
      dispatch(addTodoStart());
      const res = await addTodo(todo);
      dispatch(addTodoSuccess({ todo: res.data }));
    } catch (e) {
      dispatch(addTodoFailure());
    }
  }
}

export const updateATodo = (todo) => {
  return async (dispatch) => {
    try {
      dispatch(updateTodoStart())
      const res = await updateTodo({ ...todo });
      dispatch(updateTodoSuccess({ todo: res.data }))
    } catch (e) {
      dispatch(updateTodoFailure())
    }
  }
}

export const deleteATodo = (todoId) => {
  return async (dispatch) => {
    try {
      await deleteTodo(todoId);
      dispatch(deleteTodoSuccess({ todoId }))
    } catch (e) {
      console.error(e);
    }
  }
}

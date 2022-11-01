import axios from './axios';

export const fetchTodos = async () => {
  try {
    const res = await axios.get('/todos');
    return res;
  } catch (error) {
    throw error;
  }
}

export const addTodo = async (todo) => {
  try {
    return await axios.post('/todos', todo);
  } catch (error) {
    throw error;
  }
}

export const updateTodo = async (todo) => {
  try {
    return await axios.put(`/todos/${todo.id}`, todo);
  } catch (error) {
    throw error;
  }
}

export const deleteTodo = async (todoId) => {
  try {
    return await axios.delete(`/todos/${todoId}`);
  } catch (error) {
    throw error;
  }
}

export const getTodoById = async (todoId) => {
  try {
    return await axios.get(`/todos/${todoId}`);
  } catch (error) {
    throw error;
  }
}

import { todoReducer, initialState } from './todo.slice';

describe('TodoReducer', () => {
  it('should have initial state', () => {
    expect(todoReducer(undefined, {}).todos.length).toEqual(initialState.todos.length);
    expect(todoReducer(undefined, {}).isFetching).toBeFalsy();
    expect(todoReducer(undefined, {}).completed).toEqual(initialState.completed);
  })

  it('should add a new todo', () => {
    const updatedState = todoReducer(initialState, { type: 'todo/addTodoSuccess', payload: { todo: { id: 10, todo: 'Learn Reactjs', isCompleted: false } } });
    expect(updatedState.todos.length).toEqual(1);
    expect(updatedState.todos[0].todo).toEqual('Learn Reactjs');
    expect(updatedState.completed).toEqual(0);
  })

  it('should fetch todos', () => {
    const updatedState = todoReducer(initialState, { type: 'todo/fetchAllSuccess', payload: { todos: [{ id: 10, todo: 'Learn Reactjs', isCompleted: false }, { id: 11, todo: 'Learn Angular', isCompleted: true }] } });
    expect(updatedState.todos.length).toEqual(2);
    expect(updatedState.completed).toEqual(1);
  })

  it('should delete todo', () => {
    const updatedState = todoReducer({ ...initialState, completed: 1, todos: [{ id: 10, todo: 'Learn Reactjs', isCompleted: false }, { id: 11, todo: 'Learn Angular', isCompleted: true }] }, { type: 'todo/deleteTodoSuccess', payload: { todoId: 11 } });
    expect(updatedState.todos.length).toEqual(1);
    expect(updatedState.completed).toEqual(0);
  })
  
  it('should update todo', () => {
    const updatedState = todoReducer({ ...initialState, completed: 1, todos: [{ id: 10, todo: 'Learn Reactjs', isCompleted: false }, { id: 11, todo: 'Learn Angular', isCompleted: true }] }, { type: 'todo/updateTodoSuccess', payload: { todo: { id: 10, todo: 'Learn Reactjs', isCompleted: true } } });
    expect(updatedState.completed).toEqual(2);
  })
})

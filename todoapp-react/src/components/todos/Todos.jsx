import React, { useState, Component } from "react";
import { fetchTodos, addTodo, deleteTodo, updateTodo } from "../../services/todos.service";
import { TodoFooter } from "../todo-footer/TodoFooter";
import { TodoHeader } from "../todo-header/TodoHeader";
import { TodoList } from "../todo-list/TodoList";
import "./Todos.css";

// react hooks introduced in 16.8v
// useState, useEffect, useCallback, useLayoutEffect, useReducer, useRef, useId

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(0);
  const [error, setError] = useState(null);

  const addNewTodo = async (todoTitle) => {
    if (todoTitle.trim().length === 0) return false;

    const newTodo = { todo: todoTitle, isCompleted: false };
    try {
      const res = await addTodo(newTodo);
      const updatedTodos = [...todos, res.data];
      setTodos(updatedTodos);
      calCompletedTodos(updatedTodos);
    } catch (e) {
      setError(e);
    }
  };

  const handleTodoDelete = async (todoId) => {
    try {
      await deleteTodo(todoId);
      const filteredTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(filteredTodos);
    } catch (e) {
      setError(e);
    }
  };

  const handleUpdateTodo = async (updatedTodo) => {
    try {
      const res = await updateTodo({ ...updatedTodo });
      const index = todos.findIndex((todo) => todo.id === updatedTodo.id);
      if(index) {
        const updatedTodos = [...todos]
        updatedTodos.splice(index, 1, res.data);
        setTodos(updatedTodos);
      }
    } catch (e) {
      setError(e)
    }
  }

  const calCompletedTodos = (t) => {
    const completed = t.filter((todo) => todo.isCompleted);
    setCompleted(completed.length);
  };

  /* const fetchTodos = () => {
    fetch(`http://localhost:4000/todos`, {
      method: 'GET'
    }).then(res => {
      return res.json(); 
    }).then(data => {
      console.log(data);
      setTodos(data);
    }).catch(error => console.error(error));
  } */

  const getTodos = async () => {
    try {
      const res = await fetchTodos();
      setTodos(res.data);
    } catch (e) {
      setError(e);
    }
  };

  React.useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="container app-todos">
      {error ? <small>{error.message}</small> : null}
      <TodoHeader handleSubmit={addNewTodo} />
      <TodoList
        todos={todos}
        handleTodoDelete={handleTodoDelete}
        handleUpdateTodo={handleUpdateTodo}
      />
      <TodoFooter total={todos.length} completed={completed} />
    </div>
  );
};

/**
 * Phase I Mounting -> invoked only once
 * constructor
 * static getDerivedStateFromProps
 * render
 * componentDidMount
 * Phase II Updating
 * static getDerivedStateFromProps
 * shouldComponentUpdate
 * render
 * static getSnapshotBeforeUpdate
 * componentDidUpdate
 * Phase III Unmounting ->  invoked only once
 * componentWillUnmount
 */
export class TodosComponent extends Component {
  constructor(props) {
    super(props);
    this.appTitle = "Todos";
    this.state = {
      title: "Todos",
      todos: ["Learn HTML"],
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ title: "Todos updated" });
  };

  render() {
    return (
      <div className="container">
        <h2 title={this.state.title}>
          {this.state.title} || {this.appTitle}
        </h2>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

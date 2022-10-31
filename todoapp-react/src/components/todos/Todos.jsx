import React, { useState, Component } from "react";
import { TodoFooter } from "../todo-footer/TodoFooter";
import { TodoHeader } from "../todo-header/TodoHeader";
import { TodoList } from "../todo-list/TodoList";
import "./Todos.css";

// react hooks introduced in 16.8v
// useState, useEffect, useCallback, useLayoutEffect, useReducer, useRef, useId

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(0);

  const addTodo = (newTodo) => {
    if (newTodo.trim().length === 0) return false;
    const updatedTodos = [
      ...todos,
      { id: todos.length + 1, todo: newTodo, isCompleted: false },
    ];
    setTodos(updatedTodos);
    calCompletedTodos(updatedTodos);
  };

  const calCompletedTodos = (t) => {
    const completed = t.filter((todo) => todo.isCompleted);
    setCompleted(completed.length);
  };

  return (
    <div className="container app-todos">
      <TodoHeader handleSubmit={addTodo} />
      <TodoList todos={todos} />
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

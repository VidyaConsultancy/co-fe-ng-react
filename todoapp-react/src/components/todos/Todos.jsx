import React, { useState, Component } from "react";

// react hooks introduced in 16.8v
// useState, useEffect, useCallback, useLayoutEffect, useReducer, useRef, useId

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const todoRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim().length === 0) return false;
    setTodos([
      ...todos,
      { id: todos.length + 1, todo: newTodo, isCompleted: false },
    ]);
    setNewTodo('');
  };

  const handleOnChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="container">
      <h2 title={"Todos"}>Todos</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="todo" className="sr-only">
            What would you like to do?
          </label>
          <input
            ref={todoRef}
            value={newTodo}
            onChange={handleOnChange}
            type="text"
            id="todo"
            name="todo"
            className="form-input"
            placeholder="What would you like to do?"
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      <ul className="todos">
        {todos.length ? (
          todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              {todo.todo}
            </li>
          ))
        ) : (
          <div className="todo-zero-state">
            You don't have any todos yet. Create one here
          </div>
        )}
      </ul>
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

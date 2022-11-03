import React from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  fetchAllTodos,
  addNewTodo,
  updateATodo,
  deleteATodo,
} from "../../store/todo/todo.slice";
import { TodoFooter } from "../todo-footer/TodoFooter";
import { TodoHeader } from "../todo-header/TodoHeader";
import { TodoList } from "../todo-list/TodoList";
import "./Todos.css";

// react hooks introduced in 16.8v
// useState, useEffect, useCallback, useLayoutEffect, useReducer, useRef, useId

export const Todos = () => {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);

  const handleAddTodo = async (todoTitle) => {
    if (todoTitle.trim().length === 0) return false;
    const newTodo = { todo: todoTitle, isCompleted: false };
    dispatch(addNewTodo(newTodo));
  };

  const handleTodoDelete = async (todoId) => {
    dispatch(deleteATodo(todoId));
  };

  const handleUpdateTodo = async (updatedTodo) => {
    dispatch(updateATodo(updatedTodo));
  };

  /* const fetchTodos = () => {
    fetch(`http://localhost:4000/todos`, {
      method: 'GET'
    }).then(res => {
      return res.json(); 
    }).then(data => {
      console.log(data);
    }).catch(error => console.error(error));
  } */

  React.useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <div className="container app-todos" data-testid="todosContainer">
      {todoState.error ? <small>{todoState.error.message}</small> : null}
      <TodoHeader handleSubmit={handleAddTodo} />
      <TodoList
        todos={todoState.todos}
        handleTodoDelete={handleTodoDelete}
        handleUpdateTodo={handleUpdateTodo}
      />
      <TodoFooter
        total={todoState.todos.length}
        completed={todoState.completed}
      />
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
export class TodosComponent extends React.Component {
  constructor(props) {
    super(props);
    this.appTitle = "Todos";
    this.state = {
      title: "Todos",
      todos: ["Learn HTML"],
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchTodos();
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
        <TodoList
          todos={this.props.todos}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todo.todos,
  isFetching: state.todo.isFetching,
  accessToken: state.auth.accessToken,
})

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: (todo) => dispatch(addNewTodo(todo)),
  fetchTodos: () => dispatch(fetchAllTodos())
})
export const TodosComponentContainer = connect(mapStateToProps, mapDispatchToProps)(TodosComponent);


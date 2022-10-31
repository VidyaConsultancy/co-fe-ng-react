import React from "react";
import { Link, useNavigate } from 'react-router-dom';

export const TodoItem = ({ todo }) => {
  const navigate = useNavigate();

  return (
    <li className="todos-item">
      <label htmlFor="">
        <input type="checkbox" name="todo-toggle" className="todo-toggle" />
        {todo.todo}
      </label>
      <div className="todos-actions">
        <Link
          to={`/todos/${todo.id}`}
          className="button button-icon button-default"
        >
          Detail
        </Link>
        <button
          className="button button-icon button-default"
          onClick={() => navigate(`/todos/${todo.id}`)}
        >
          Detail
        </button>
        <button className="button button-icon button-info">Edit</button>
        <button className="button button-icon button-danger">Delete</button>
      </div>
    </li>
  );
}

import React from "react";

export const TodoItem = ({ todo }) => {
  return (
    <li className="todos-item">
      <label htmlFor="">
        <input type="checkbox" name="todo-toggle" className="todo-toggle" />
        {todo.todo}
      </label>
      <div className="todos-actions">
        <button className="button button-icon button-default">Detail</button>
        <button className="button button-icon button-info">Edit</button>
        <button className="button button-icon button-danger">Delete</button>
      </div>
    </li>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export const TodoItem = ({
  todo,
  handleTodoDelete,
  handleUpdateTodo,
  showDetail = true,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [updatedTodo, setUpdatedTodo] = React.useState("");

  const onEdit = () => {
    setIsEditing(false);
    handleUpdateTodo({ ...todo, todo: updatedTodo });
  };

  return (
    <li className="todos-item">
      <label htmlFor="todo-toggle">
        <input
          type="checkbox"
          id="todo-toggle"
          name="todo-toggle"
          className="todo-toggle"
          checked={todo.isCompleted}
          onChange={(e) =>
            handleUpdateTodo({ ...todo, isCompleted: e.target.checked })
          }
        />
        {isEditing ? (
          <input
            type="text"
            name="updatedTodo"
            id="updatedTodo"
            value={updatedTodo}
            onChange={(e) => setUpdatedTodo(e.target.value)}
          />
        ) : (
          todo.todo
        )}
      </label>
      <div className="todos-actions">
        {showDetail ? (
          <Link
            to={`/todos/${todo.id}`}
            className="button button-icon button-default"
          >
            Detail
          </Link>
        ) : null}
        {/* <button
          className="button button-icon button-default"
          onClick={() => navigate(`/todos/${todo.id}`)}
        >
          Detail
        </button> */}
        {isEditing ? (
          <button className="button button-icon button-info" onClick={onEdit}>
            Save
          </button>
        ) : (
          <button
            className="button button-icon button-info"
            onClick={() => {
              setIsEditing(true);
              setUpdatedTodo(todo.todo)
            }}
          >
            Edit
          </button>
        )}
        <button
          className="button button-icon button-danger"
          onClick={() => handleTodoDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

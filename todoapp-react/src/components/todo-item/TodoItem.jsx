import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare, faEye, faSave } from '@fortawesome/free-regular-svg-icons';

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
      <label htmlFor={`todo-toggle-${todo.id}`} className="todo-toggle">
        <input
          type="checkbox"
          id={`todo-toggle-${todo.id}`}
          name="todo-toggle"
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
          <span className="todo-title">{todo.todo}</span>
        )}
      </label>
      <div className="todos-actions">
        {showDetail ? (
          <Link
            to={`/todos/${todo.id}`}
            className="button button-icon button-default"
          >
            <FontAwesomeIcon icon={faEye} />
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
            <FontAwesomeIcon icon={faSave} />
          </button>
        ) : (
          <button
            className="button button-icon button-info"
            onClick={() => {
              setIsEditing(true);
              setUpdatedTodo(todo.todo);
            }}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        )}
        <button
          className="button button-icon button-danger"
          onClick={() => handleTodoDelete(todo.id)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </li>
  );
};

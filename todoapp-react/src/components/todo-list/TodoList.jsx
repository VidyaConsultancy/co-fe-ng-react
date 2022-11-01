import React from "react";
import { TodoItem } from "../todo-item/TodoItem";

export const TodoList = ({ todos = [], handleTodoDelete, handleUpdateTodo }) => {
  return (
    <ul className="todos">
      {todos.length ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleTodoDelete={handleTodoDelete}
            handleUpdateTodo={handleUpdateTodo}
          />
        ))
      ) : (
        <div className="todo-zero-state">
          You don't have any todos yet. Create one here
        </div>
      )}
    </ul>
  );
};

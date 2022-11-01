import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoById, deleteTodo, updateTodo } from "../../services/todos.service";
import { TodoItem } from "../todo-item/TodoItem";

export const TodoDetail = () => {
  const [todo, setTodo] = React.useState({});
  const { todoId } = useParams();
  const navigate = useNavigate();

  const handleTodoDelete = async (todoId) => {
    try {
      await deleteTodo(todoId);
      navigate('/todos');
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateTodo = async (updatedTodo) => {
    try {
      await updateTodo({ ...updatedTodo });
      navigate("/todos");
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    getTodoById(todoId)
      .then((res) => {
        setTodo(res.data);
      })
      .catch((error) => console.error(error));
  }, [todoId]);

  return (
    <div className="todo-detail">
      <TodoItem
        todo={todo}
        showDetail={false}
        handleTodoDelete={handleTodoDelete}
        handleUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
};

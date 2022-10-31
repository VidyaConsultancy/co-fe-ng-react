import React from "react";
import { useParams } from 'react-router-dom';
import { TodoItem } from "../todo-item/TodoItem";

export const TodoDetail = () => {
  const [todo, setTodo] = React.useState({});
  const params = useParams();
  console.log(params);
  
  return (
    <div className="todo-detail">
      <TodoItem todo={todo} />
    </div>
  )
}

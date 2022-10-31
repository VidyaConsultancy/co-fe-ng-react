import React from "react";

export const TodoHeader = ({ handleSubmit }) => {
  const [newTodo, setNewTodo] = React.useState("");

  const handleOnChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="todos-header">
      <h2 title={"Todos"} className="todos-title">Todos</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(newTodo);
          setNewTodo('');
        }}
      >
        <div className="form-group">
          <label htmlFor="todo" className="sr-only">
            What would you like to do?
          </label>
          <input
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
          <button type="submit" className="button button-default">Submit</button>
        </div>
      </form>
    </div>
  );
};

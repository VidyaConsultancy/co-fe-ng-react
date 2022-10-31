import React from "react";

export const TodoFooter = ({ total, completed }) => {
  return (
    <div className="todos-footer">
      {completed ? <span>Completed:: {completed}</span> : null}
      {total ? <span>Total:: {total}</span> : null}
    </div>
  );
};

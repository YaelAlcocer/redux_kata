import React from "react";

const Todo = ({ onClick, completed, text, deleteTodo }) => (
  <li
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
    <input type="checkbox" onClick={onClick} />
  </li>
);

export default Todo;

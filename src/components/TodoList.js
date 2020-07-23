import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <lu>
      {todos.map((todo) => (
        <Todo />
      ))}
    </lu>
  );
};

export default TodoList;

import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, deleteTodo, resetList }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
      <button onClick={() => resetList()}>Reset List</button>
    </div>
  );
};

export default TodoList;

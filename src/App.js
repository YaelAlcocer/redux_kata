import React from "react";
import "./App.css";

import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Options from "./components/Options";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Kata</h1>
        <AddTodo />
        <VisibleTodoList />
        <Options />
      </header>
    </div>
  );
}

export default App;

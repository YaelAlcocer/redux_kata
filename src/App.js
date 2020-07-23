import React from "react";
import "./App.css";

import AddTodo from "./containers/AddTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Kata</h1>
        <AddTodo />
      </header>
    </div>
  );
}

export default App;

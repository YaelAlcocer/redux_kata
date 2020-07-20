import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Kata</h1>
      </header>
        <strong><i>TodoList</i> with redux.</strong>
        <hr/>
        <p>This app should be able to:</p>
        <ol>
            <li>input text and a button to Add list items</li>
            <li>Buttons to show/hide list</li>
            <li>Buttons to show/hide completed/active tasks</li>
            <li>Add/Remove list items</li>
            <li>Mark items as completed (use checkbox)</li>
            <li>Reset list</li>
        </ol>
        <hr/>
        <p>General guidelines</p>
        <ol>
            <li>Install react-redux</li>
            <li>Create an actions folder with an index.js file that handles redux actions (with types)</li>
            <li>Use a reducer to handle actions</li>
            <li>Use a reducer to handle Add/remove show/hide tasks actions</li>
            <li>Use a reducer to handle show list/hide list actions</li>
            <li>Use combine reducers</li>
            <li>Use a different component for each action</li>
        </ol>
    </div>
  );
}

export default App;

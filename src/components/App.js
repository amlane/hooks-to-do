import React from "react";
import ToDoList from "./ToDoList";
import "../styles/App.css";

function App() {
  console.log("App renders");
  return (
    <div className="App">
      <header className="App-header">
        <ToDoList />
      </header>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import AddToDo from "./AddToDo";

function ToDoList() {
  const [toDos, setToDos] = useState([
    { id: 1, task: "dishes" },
    { id: 2, task: "laundry" },
    { id: 3, task: "exercise" }
  ]);

  const [input, setInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setToDos([...toDos, { id: Date.now(), task: input }]);
    setInput("");
  };

  return (
    <div>
      <ul>
        {toDos.map(todo => {
          return <li>{todo.task}</li>;
        })}
      </ul>
      <AddToDo handleSubmit={handleSubmit} input={input} setInput={setInput} />
    </div>
  );
}

export default ToDoList;

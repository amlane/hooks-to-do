import React, { useState } from "react";

function ToDoList() {
  const [toDos, setToDos] = useState([
    { id: 1, task: "dishes" },
    { id: 2, task: "laundry" },
    { id: 3, task: "exercise" }
  ]);
  return (
    <div>
      <ul>
        {toDos.map(todo => {
          return <li>{todo.task}</li>;
        })}
      </ul>
    </div>
  );
}

export default ToDoList;

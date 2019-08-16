import React, { useState } from "react";
import NewToDo from "./NewToDo";

function ToDoList() {
  const [toDos, setToDos] = useState([
    { id: 1, task: "cry" },
    { id: 2, task: "bake cookies" },
    { id: 3, task: "figure out state mgmt for forms" }
  ]);

  console.log("App renders");
  return (
    <div>
      <ul>
        {toDos.map(todo => {
          return <li>{todo.task}</li>;
        })}
      </ul>
      <NewToDo toDos={toDos} setToDos={setToDos} />
    </div>
  );
}

export default ToDoList;

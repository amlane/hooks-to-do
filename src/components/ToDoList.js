import React, { useState } from "react";

function ToDoList() {
  const [toDos, setToDos] = useState([
    { id: 1, task: "cry" },
    { id: 2, task: "bake cookies" },
    { id: 3, task: "figure out state mgmt for forms" }
  ]);

  const [input, setInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setToDos([...toDos, { id: Date.now(), task: input }]);
    setInput("");
  };
  console.log("App renders");
  return (
    <div>
      <ul>
        {toDos.map(todo => {
          return <li>{todo.task}</li>;
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="What you needin to do fam?"
          onChange={e => setInput(e.target.value)}
        />
        <button>+</button>
      </form>
    </div>
  );
}

export default ToDoList;

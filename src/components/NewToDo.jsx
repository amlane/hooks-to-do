import React, { useState } from "react";

function AddToDo(props) {
  const [input, setInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.setToDos([...props.toDos, { id: Date.now(), task: input }]);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="What you needin to do fam?"
        onChange={e => setInput(e.target.value)}
      />
      <button>+</button>
    </form>
  );
}

export default AddToDo;

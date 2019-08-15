import React from "react";

function AddToDo(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.input}
        placeholder="What you needin to do fam?"
        onChange={e => props.setInput(e.target.value)}
      />
      <button>+</button>
    </form>
  );
}

export default AddToDo;

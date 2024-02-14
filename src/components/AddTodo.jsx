/* eslint-disable react/prop-types */
import { useState } from "react";

function AddTodo({ addTodoItem, label }) {
  const [todoItem, setTodoItem] = useState("");

  function handleTodoItem(e) {
    setTodoItem(e.target.value);
  }
  function handleAddTodoItem() {
    console.log(todoItem);
    addTodoItem(todoItem);
  }
  return (
    <>
      <div className="container mb-2">
        <label htmlFor="todo" className="form-label">
          {label}
        </label>
        <input
          type="text"
          className="form-control"
          id="todo"
          placeholder="Buy groceries"
          value={todoItem}
          onChange={(e) => handleTodoItem(e)}
        ></input>
        <button
          className="btn btn-primary w-100 mt-2"
          onClick={handleAddTodoItem}
        >
          Add Todo Item
        </button>
      </div>
      {todoItem}
      <hr />
    </>
  );
}

export default AddTodo;

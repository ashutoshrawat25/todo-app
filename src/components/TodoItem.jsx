import { useState } from "react";
import EditTodo from "./EditTodo";

/* eslint-disable react/prop-types */
function TodoItem({ todoItem, onDelete, onEdit }) {
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState("");
  function handleSetData(e) {
    setEditData(e.target.value);
  }
  function handleSetEdit(item) {
    setEdit((prev) => !prev);
    setEditData(item);
  }
  function handleCancelEdit() {
    setEdit(false);
  }
  function handleEdit(id, editData) {
    onEdit(id, editData);
    setEdit(false);
  }
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
        {todoItem.todo}
        <div>
          <button
            className="btn btn-primary me-2"
            onClick={() => handleSetEdit(todoItem.todo)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onDelete(todoItem.id)}
          >
            Delete
          </button>
        </div>
      </li>
      {edit && (
        <>
          <EditTodo
            onClickCancel={handleCancelEdit}
            onSetData={handleSetData}
            editData={editData}
            onClickEdit={() => handleEdit(todoItem.id, editData)}
          />
        </>
      )}
    </>
  );
}

export default TodoItem;

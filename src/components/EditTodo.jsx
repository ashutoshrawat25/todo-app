/* eslint-disable react/prop-types */

function EditTodo({ onClickCancel, onSetData, editData, onClickEdit }) {
  return (
    <div className="container">
      <input
        type="text"
        className="form-control p-3 mb-2 bg-primary-subtle"
        id="todo"
        value={editData}
        onChange={(e) => onSetData(e)}
      ></input>
      <div className="d-flex justify-content-center">
        <button className="btn btn-warning mb-2" onClick={onClickEdit}>
          Edit
        </button>
        <button className="btn btn-danger mb-2" onClick={onClickCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditTodo;

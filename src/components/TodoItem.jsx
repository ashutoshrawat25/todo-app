/* eslint-disable react/prop-types */
function TodoItem({ todoItem }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todoItem.todo}
      <div>
        <button className="btn btn-primary me-2">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
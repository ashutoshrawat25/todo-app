function TodosList() {
  return (
    <div className="container">
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          An item
          <div>
            <button className="btn btn-primary me-2">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TodosList;

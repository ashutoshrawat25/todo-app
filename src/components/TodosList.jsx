/* eslint-disable react/prop-types */
function TodosList({ todoList }) {
  return (
    <div className="container">
      <ul className="list-group">
        {todoList.map((todoItem) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={todoItem.id}
            >
              {todoItem.todo}
              <div>
                <button className="btn btn-primary me-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodosList;

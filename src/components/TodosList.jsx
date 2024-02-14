import TodoItem from "./TodoItem";

/* eslint-disable react/prop-types */
function TodosList({ todoList, onDelete }) {
  return (
    <div className="container">
      <ul className="list-group">
        {todoList.map((todoItem) => {
          return (
            <TodoItem
              todoItem={todoItem}
              key={todoItem.id}
              onDelete={onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodosList;

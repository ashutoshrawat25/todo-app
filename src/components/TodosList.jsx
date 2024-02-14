import TodoItem from "./TodoItem";

/* eslint-disable react/prop-types */
function TodosList({ todoList, onDelete, onEdit }) {
  return (
    <div className="container">
      <h2 className="p-2">Todo List For You</h2>
      <ul className="list-group">
        {todoList.map((todoItem) => {
          return (
            <TodoItem
              todoItem={todoItem}
              key={todoItem.id}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodosList;

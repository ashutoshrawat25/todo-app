import { useState } from "react";
import Header from "./components/Header";
import TodosList from "./components/TodosList";
import { useEffect } from "react";
import AddTodo from "./components/AddTodo";

function App() {
  const apiurl = "https://dummyjson.com/todos?limit=10";
  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    async function fetchTodoData() {
      const response = await fetch(apiurl, { method: "GET" });
      const data = await response.json();
      console.log(data);
      setTodoData(data.todos);
    }
    fetchTodoData();
  }, []);

  function handleDelete(id) {
    const newTodos = todoData.filter((todo) => todo.id !== id);
    setTodoData(newTodos);
  }
  function handleAddTodoItem(todoItem) {
    setTodoData([
      { id: Date.now(), completed: false, todo: todoItem, userId: 48 },
      ...todoData,
    ]);
    console.log(todoData);
  }
  function handleEditTodo(id, data) {
    const index = todoData.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      // Update the existing todo in place
      console.log(todoData[index]);
      todoData[index] = {
        ...todoData[index], // Spread previous values
        todo: data,
      };
      console.log(todoData);
      setTodoData([...todoData]);
    }
  }

  return (
    <>
      <Header />
      <AddTodo addTodoItem={handleAddTodoItem} label={"Add Todo Item"} />
      <TodosList
        todoList={todoData}
        onDelete={handleDelete}
        onEdit={handleEditTodo}
      />
    </>
  );
}

export default App;

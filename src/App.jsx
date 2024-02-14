import { useState } from "react";
import Header from "./components/Header";
import TodosList from "./components/TodosList";
import { useEffect } from "react";

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

  return (
    <>
      <Header />
      <TodosList todoList={todoData} onDelete={handleDelete} />
    </>
  );
}

export default App;

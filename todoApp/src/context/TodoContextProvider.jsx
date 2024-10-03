import todoContext from "./todoContext";
import { useEffect, useState } from "react";

export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    todo = { ...todo, id: Date.now() };
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...newTodo, id } : todo))
    );
  };

  const completeTodo = (id, complete) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, complete } : todo))
    );
  };

  return (
    <todoContext.Provider
      value={{ todos, addTodo, removeTodo, updateTodo, completeTodo }}
    >
      {children}
    </todoContext.Provider>
  );
}

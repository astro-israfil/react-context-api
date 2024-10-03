import React, { useState } from "react";
import { useTodo } from "../context";

const TodoInputForm = () => {
  const [todoInput, setTodoInput] = useState("");
  const { addTodo } = useTodo();
  const handleAddTodo = (e) => {
    e.preventDefault();
    const todo = { todo: todoInput, complete: false };
    addTodo(todo);
    setTodoInput("");
  };
  return (
    <div className="w-full h-14 lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto">
      <form className="flex flex-wrap gap-3" onSubmit={handleAddTodo}>
        <label className="flex-1" htmlFor="todoInput">
          <input
            id="todoInput"
            className="w-full sm:p-2 md:p-4 p-2 border-gray-400 hover:border-gray-200 border rounded outline-purple-500 outline-1 focus:md:shadow-md focus:shadow-sm"
            type="text"
            placeholder="Add your task to do"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="bg-purple-700 rounded border-none outline-0 text-blue-100 font-bold px-4 sm:px-4 md:px-5 lg:px-6 hover:scale-110 transition-all"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default TodoInputForm;

import React from "react";
import { TodoItem } from "./";
import { useTodo } from "../context";

const Todos = () => {
  const { todos } = useTodo();
  return (
    <div className="w-full lg:max-w-lg md:max-w-md sm:max-w-sm p-4">
      {Array.isArray(todos) &&
        todos.map((todo) => <TodoItem key={todo.id} task={todo} />)}
    </div>
  );
};

export default Todos;

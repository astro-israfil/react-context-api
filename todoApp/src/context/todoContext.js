import { createContext, useContext } from "react";

const todoContext = createContext({
    todos: [],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    updateTodo: (id, newTodo) => {},
    completeTodo: (id, complete) => {}
})

export default todoContext

export const useTodo = () => {
    return useContext(todoContext);
}
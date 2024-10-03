import React, { useState, useRef, useId } from "react";
import { useTodo } from "../context";

const TodoItem = ({ task }) => {
  const [editing, setEditing] = useState(false);
  const [todoInput, setTodoInput] = useState(task.todo || "");
  const [isComplete, setIsComplete] = useState(task.complete || false);
  const todoInputRef = useRef(null);
  const inputFieldId = useId();
  const checkboxId = useId();
  const { updateTodo, removeTodo, completeTodo } = useTodo();

  const activeEditingMode = () => {
    setEditing(true);
    todoInputRef.current.focus();
  };

  const deactiveEditingMode = () => {
    setEditing(false);
  };

  const handleUpdateTodo = () => {
    updateTodo(task.id, { ...task, todo: todoInput });
    deactiveEditingMode();
  };

  const handleDeleteTodo = () => {
    removeTodo(task.id);
  };

  const handleToggleCompleteTodo = (e) => {
    setIsComplete(!isComplete);
    completeTodo(task.id, e.target.checked);
  };

  return (
    <div className="flex items-center gap-5">
      <label htmlFor={checkboxId} title="Is todo done">
        <input
          className="w-5 h-5 cursor-pointer"
          type="checkbox"
          name="isComplete"
          id={checkboxId}
          checked={isComplete}
          onChange={handleToggleCompleteTodo}
        />
      </label>
      <label className="flex-1" htmlFor={inputFieldId}>
        <input
          className={`pointer-events-none outline-0 w-full ${
            isComplete ? "line-through" : ""
          }`}
          type="text"
          id={inputFieldId}
          readOnly={!editing}
          value={todoInput}
          onChange={editing ? (e) => setTodoInput(e.target.value) : undefined}
          ref={todoInputRef}
          placeholder={todoInput}
        />
      </label>
      {!editing ? (
        <button onClick={activeEditingMode} title="Edit todo">
          <svg
            className="fill-purple-600 hover:fill-purple-900 m-2 transition-all"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M 19.171875 2 C 18.448125 2 17.724375 2.275625 17.171875 2.828125 L 16 4 L 20 8 L 21.171875 6.828125 C 22.275875 5.724125 22.275875 3.933125 21.171875 2.828125 C 20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"></path>
          </svg>
        </button>
      ) : (
        <button title="Update todo" onClick={handleUpdateTodo}>
          <svg
            className="fill-yellow-700 hover:fill-yellow-600 transition-all"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="20"
            height="20"
            viewBox="0 0 407.096 407.096"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M402.115,84.008L323.088,4.981C319.899,1.792,315.574,0,311.063,0H17.005C7.613,0,0,7.614,0,17.005v373.086
                c0,9.392,7.613,17.005,17.005,17.005h373.086c9.392,0,17.005-7.613,17.005-17.005V96.032
                C407.096,91.523,405.305,87.197,402.115,84.008z M300.664,163.567H67.129V38.862h233.535V163.567z"
                />
                <path
                  d="M214.051,148.16h43.08c3.131,0,5.668-2.538,5.668-5.669V59.584c0-3.13-2.537-5.668-5.668-5.668h-43.08
                c-3.131,0-5.668,2.538-5.668,5.668v82.907C208.383,145.622,210.92,148.16,214.051,148.16z"
                />
              </g>
            </g>
          </svg>
        </button>
      )}

      <button onClick={handleDeleteTodo} title="Delete">
        <svg
          className="fill-gray-600 hover:fill-red-600 transition-all"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="26"
          height="26"
          viewBox="0 0 30 30"
        >
          <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;

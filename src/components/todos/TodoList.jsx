import React from "react";
import { useDrop } from "react-dnd";
import SingleTodo from "./SingleTodo";

const TodoList = ({ title, todos = [] }) => {
  // handleDrop function for dropping and change state and localStorage
  const handleDrop = (todo) => {
    if (todo?.status?.toLowerCase() !== title?.toLowerCase()) {
      console.log("status", title);
    }
  };

  // DND - drop - hook
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      className="flex flex-col flex-shrink-0 w-60 "
      ref={drop}
      style={{ border: isOver ? "1px dashed #999" : "1px solid black" }}
    >
      <div className="flex items-center flex-shrink-0 h-10 px-2">
        <span className="block text-sm font-semibold capitalize">{title}</span>
        <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
          {todos.length}
        </span>
        {/* {title.toLowerCase() === "todo" && (
          <button
            className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
            // onClick={controlModal}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>
        )} */}
      </div>
      <div className="flex flex-col pb-2 overflow-auto ">
        {todos.map((todo) => {
          return <SingleTodo key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;

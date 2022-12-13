import React from "react";

const TodoSearchBar = () => {
  return (
    <div className="flex gap-8 w-full justify-center items-center">
      <input
        className="flex items-center w-[18.75rem] h-10 px-4  text-sm bg-gray-200 rounded focus:outline-none focus:ring"
        type="search"
        placeholder="Add new todo"
      />
      <button className="h-10 px-4 bg-gray-200 rounded focus:outline-none focus:ring">
        ADD
      </button>
    </div>
  );
};

export default TodoSearchBar;

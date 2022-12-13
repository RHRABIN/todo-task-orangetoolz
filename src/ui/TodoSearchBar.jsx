import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addTodo from "../redux/todo/thunk/addTodo";

const TodoSearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (inputValue) {
      const newTodo = { id: Date.now(), name: inputValue, status: "to do" };
      dispatch(addTodo(newTodo));
      setInputValue("");
    } else {
      alert("Your field is empty.");
    }
  };
  return (
    <div className="flex gap-8 w-full justify-center items-center">
      <input
        className="flex items-center w-[18.75rem] h-10 px-4  text-sm bg-gray-200 rounded focus:outline-none focus:ring"
        type="search"
        placeholder="Add new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="h-10 px-4 bg-gray-200 rounded focus:outline-none focus:ring"
        onClick={handleAdd}
      >
        ADD
      </button>
    </div>
  );
};

export default TodoSearchBar;

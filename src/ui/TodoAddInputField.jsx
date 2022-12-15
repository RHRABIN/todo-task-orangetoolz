import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import addTodo from "../redux/todo/thunk/addTodo";
import fetchTodo from "../redux/todo/thunk/fetchTodos";

const TodoAddInputField = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const createdAt = new Date().toLocaleDateString();

    // if input value is available then add this todo
    if (inputValue) {
      const newTodo = {
        id: Date.now(),
        name: inputValue,
        status: "to do",
        createdAt: createdAt,
      };

      // dispatch( add todo and fetch for initially )
      dispatch(addTodo(newTodo));
      dispatch(fetchTodo());

      // add success message
      toast.success("Successfully created!");
      setInputValue("");
    } else {
      toast.error("Input field is empty!");
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

export default TodoAddInputField;

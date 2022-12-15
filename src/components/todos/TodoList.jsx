import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import updateTodo from "../../redux/todo/thunk/updateTodo";
import SingleTodo from "./SingleTodo";

const TodoList = ({ title, todos = [] }) => {
  // handleDrop function for dropping and change state and localStorage
  const dispatch = useDispatch();

  // after drop a todo then invoke this function with necessary data
  const handleDrop = (todo) => {
    if (todo?.status?.toLowerCase() !== title?.toLowerCase()) {
      const updateTodoData = { ...todo };
      updateTodoData.status = title?.toLowerCase();
      dispatch(updateTodo(updateTodoData.id, updateTodoData));
    }
  };

  // DND - drop - hook implement
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      className="flex flex-col flex-shrink-0 w-72 mb-8 sm:mb-0 mt-3"
      ref={drop}
      style={{
        border: isOver ? "1.5px dashed #999" : "1px solid black",
        borderRadius: "5px",
      }}
    >
      {/* todo title and todo length show on top bar */}
      <div className="flex items-center flex-shrink-0 h-10 px-2 bg-orange-500 justify-center rounded-t">
        <span className=" text-md capitalize font-bold ">{title}</span>
        <span className="flex items-center justify-center w-5 h-5 ml-2 text-md font-semibold  bg-white rounded bg-opacity-30">
          {todos.length}
        </span>
      </div>

      {/* Same status all todo mapping and display column */}
      <div className="flex flex-col  pb-2 overflow-auto mt-3 ">
        {todos.map((todo) => {
          return <SingleTodo key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;

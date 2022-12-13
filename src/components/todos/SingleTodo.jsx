import React from "react";
import { useDrag } from "react-dnd";

const SingleTodo = ({ todo }) => {
  // extract value from todo
  const { name, createdAt } = todo || {};

  // DND - dragging - hook
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: todo,
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  return (
    <div
      className={`relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100 border-2 border-transparent `}
      ref={drag}
      style={{ display: isDragging ? "none" : "flex" }}
    >
      <p className="px-2 bg-slate-500  w-full">{name}</p>
    </div>
  );
};

export default SingleTodo;

import React from "react";
import { useDrag } from "react-dnd";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import deleteTodo from "../../redux/todo/thunk/deleteTodo";

const SingleTodo = ({ todo }) => {
  const dispatch = useDispatch();

  // extract value from todo
  const { name, createdAt } = todo || {};

  // handleDeleteTodo
  const handleDeleteTodo = (id) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Are you sure you want to delete",
      confirmButtonText: "Yes",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTodo(id));
        Swal.fire("Delete!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Cancelled!");
      }
    });
  };

  // DND - dragging - hook
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: todo,
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  return (
    <div
      className={` flex flex-col items-start px-4 py-1  bg-white rounded cursor-grab`}
      ref={drag}
      style={{ display: isDragging ? "none" : "flex" }}
    >
      <div
        className="flex justify-between flex-col
       px-2 py-2 bg-[#d3d3d3] h-20 w-full rounded"
      >
        <div className="flex justify-between items-center">
          <p>{name}</p>
          {todo?.status === "to do" && (
            <button
              onClick={() => handleDeleteTodo(todo?.id)}
              title="Delete"
              className="flex align-center justify-center  w-5 h-5  text-gray-500 rounded hover:bg-red-200 hover:text-red-400 group-hover:flex "
              // onClick={handleDelete}
              data-bs-toggle="tooltip"
            >
              <MdDelete className="mt-[2px]" />
            </button>
          )}
        </div>
        <p className="text-end text-xs">10 Sep 2022</p>
      </div>
    </div>
  );
};

export default SingleTodo;

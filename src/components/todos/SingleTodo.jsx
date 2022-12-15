import moment from "moment/moment";
import React from "react";
import { useDrag } from "react-dnd";
import { MdDelete } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import deleteTodo from "../../redux/todo/thunk/deleteTodo";

const SingleTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state?.filter);

  // extract value from todo
  const { name, createdAt, status } = todo || {};

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
      className={` flex flex-col items-start px-4 py-1   bg-white rounded cursor-grab  ${
        searchText &&
        name.toLowerCase().includes(searchText.toLowerCase()) &&
        "animate-pulse  "
      }`}
      ref={drag}
      style={{ display: isDragging ? "none" : "flex" }}
    >
      <div
        className="flex justify-between flex-col
       px-2 py-2 bg-[#d3d3d3] h-20 w-full rounded"
      >
        <div className="flex justify-between items-center">
          <p>{name}</p>
          {status === "to do" && (
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
        <footer className="flex justify-between">
          <span
            className={`text-xs px-1 pb-[2px] rounded-full ${
              status === "to do" && "bg-gray-200  text-gray-600"
            } ${status === "in-progress" && "bg-orange-200  text-orange-600"} ${
              status === "done" && "bg-green-200  text-green-600"
            }`}
          >
            {todo?.status}
          </span>
          <span className=" text-xs flex gap-1 items-center">
            <RiCalendar2Line />
            {moment(createdAt, "MM-DD-YYYY").format("ll")}
          </span>
        </footer>
      </div>
    </div>
  );
};

export default SingleTodo;

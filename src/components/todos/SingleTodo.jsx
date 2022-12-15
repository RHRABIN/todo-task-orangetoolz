import moment from "moment/moment";
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { MdDelete } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RiCalendar2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import deleteTodo from "../../redux/todo/thunk/deleteTodo";
import TodoTitleUpdateModal from "../../ui/TodoTitleUpdateModal";

const SingleTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state?.filter);

  // extract value from todo
  const { name, createdAt, status } = todo || {};

  // modal states true / false
  const [opened, setOpened] = useState(false);

  // control modal for state changes
  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };

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

  // DND - dragging - hook implement
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
       px-2 py-2 bg-[#d3d3d3] h-20 w-full rounded group"
      >
        <div className="flex justify-between items-center">
          {/* Todo title/name */}
          <p>{name}</p>

          {/* if todo status will be to do then show on  hover a delete icon otherwise show edit icon conditionally */}

          {status === "to do" ? (
            // Delete Button
            <button
              onClick={() => handleDeleteTodo(todo?.id)}
              title="Delete"
              className="hidden align-center justify-center  w-5 h-5  text-gray-500 rounded hover:bg-red-200 hover:text-red-400 group-hover:flex "
              data-bs-toggle="tooltip"
            >
              <MdDelete className="mt-[2px]" />
            </button>
          ) : (
            // Edit button
            <button
              title="Edit title"
              className="hidden align-center justify-center  w-5 h-5  text-gray-500 rounded hover:bg-gray-200 group:hover:flex group-hover:flex "
              onClick={controlModal}
              data-bs-toggle="tooltip"
            >
              <BiDotsVerticalRounded className="mt-[2px]" />
            </button>
          )}
        </div>

        {/* todo footer date and status */}
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

      {/* Todo update modal with necessary data by props */}
      <TodoTitleUpdateModal open={opened} control={controlModal} data={todo} />
    </div>
  );
};

export default SingleTodo;

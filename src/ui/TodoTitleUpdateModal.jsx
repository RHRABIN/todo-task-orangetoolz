import React, { useState } from "react";
import { useDispatch } from "react-redux";
import updateTodo from "../redux/todo/thunk/updateTodo";

const TodoTitleUpdateModal = ({ open, control, data }) => {
  const [title, setTitle] = useState(data?.name);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateData = { ...data };
    updateData.name = title;
    dispatch(updateTodo(updateData.id, updateData));
    control();
  };
  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed m-0 inset-0 z-10 -left-10 bg-black/50 cursor-pointer"
        ></div>
        <div className="rounded w-[200px] lg:w-[600px] space-y-8 bg-gray-300 p-10 fixed top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-sm font-extrabold text-gray-700">Update title</h2>
          <form onSubmit={handleSubmit}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-gray-200 px-4 py-5 sm:p-6 space-y-4">
                {/* Project Title Starts */}
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="title"
                    autoComplete="given-name"
                    className="mt-1 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-200 focus:ring-indigo-200 sm:text-sm px-4"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                {/* Team Options Ends */}
              </div>
              <div className="bg-gray-200 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  );
};

export default TodoTitleUpdateModal;

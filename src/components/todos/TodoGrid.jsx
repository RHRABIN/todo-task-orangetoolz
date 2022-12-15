import React from "react";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

const TodoGrid = () => {
  // filters by status
  const todos = useSelector((state) => state.todos);

  // todo filter
  const filterByTodo = (todo) => todo?.status?.toLowerCase() === "to do";

  // in-progress filter
  const filterByInProgress = (todo) =>
    todo?.status?.toLowerCase() === "in-progress";

  // done filter
  const filterByDone = (todo) => todo?.status?.toLowerCase() === "done";

  // decide what to render base on todo
  let content = null;
  if (todos?.length === 0 || !todos) {
    content = (
      <>
        <p className="text-orange-600 text-center mt-6 text-lg">
          No todo found! You can add todo
        </p>
        <div className="flex justify-center flex-grow px-10 mt-4 space-x-6 overflow-auto">
          <TodoList title="To Do" />
          <TodoList title="In Progress" />
          <TodoList title="Done" />
        </div>
      </>
    );
  } else if (todos?.length > 0) {
    content = (
      <div className="flex flex-grow flex-wrap px-10 mt-4 space-x-0  sm:space-x-6 overflow-auto justify-center">
        {/* To do list */}
        <TodoList title="To Do" todos={todos.filter(filterByTodo)} />

        {/* In Progress list */}
        <TodoList
          title="In-Progress"
          todos={todos.filter(filterByInProgress)}
        />

        {/* done list */}
        <TodoList title="Done" todos={todos.filter(filterByDone)} />
      </div>
    );
  }
  return <div>{content}</div>;
};

export default TodoGrid;

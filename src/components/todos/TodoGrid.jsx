import React from "react";
import TodoList from "./TodoList";

const TodoGrid = () => {
  const todos = [
    { id: 1, name: "todo1", status: "to do" },
    { id: 2, name: "todo2", status: "to do" },
    { id: 3, name: "todo3", status: "in-progress" },
    { id: 4, name: "todo4", status: "done" },
    { id: 5, name: "todo5", status: "to do" },
  ];
  // filters by status

  // todo filter
  const filterByTodo = (todo) => todo?.status?.toLowerCase() === "to do";

  // in-progress filter
  const filterByInProgress = (todo) =>
    todo?.status?.toLowerCase() === "in-progress";

  // done filter
  const filterByDone = (todo) => todo?.status?.toLowerCase() === "done";

  // decide what to render base on todo
  let content = null;
  if (todos.length === 0) {
    content = (
      <>
        <p className="text-orange-500 text-center mt-6">
          No todo found! You can add todo
        </p>
        <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
          <TodoList title="To Do" />
          <TodoList title="In Progress" />
          <TodoList title="Done" />
        </div>
      </>
    );
  } else if (todos.length > 0) {
    content = (
      <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto justify-center">
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

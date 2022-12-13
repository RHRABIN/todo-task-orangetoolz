import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TodoGrid from "./TodoGrid";

const TodosContainer = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <TodoGrid />
    </DndProvider>
  );
};

export default TodosContainer;

import React from "react";
import TodoSearchBar from "../../ui/TodoSearchBar";
import TodosContainer from "../todos/TodosContainer";

const Home = () => {
  return (
    <div>
      <TodoSearchBar />
      <TodosContainer />
    </div>
  );
};

export default Home;

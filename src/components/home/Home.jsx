import React from "react";
import TodoAddInputField from "../../ui/TodoAddInputField";
import TodosContainer from "../todos/TodosContainer";

const Home = () => {
  return (
    <div>
      {/* 
        Import TodoAddInputField and TodosContainer and finaly this Home component import from App.js
      */}
      <TodoAddInputField />
      <TodosContainer />
    </div>
  );
};

export default Home;

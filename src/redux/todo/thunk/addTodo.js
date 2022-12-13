import { add_todo } from "../actions";

const addTodo = (todo) => {
  return async (dispatch) => {
    // declare an object for storing the localStorage data

    let newDataUsers = JSON.parse(localStorage.getItem("all-todo"));
    if (newDataUsers) {
      newDataUsers = [...newDataUsers, todo];
    } else {
      newDataUsers = [todo];
    }
    localStorage.setItem("all-todo", JSON.stringify(newDataUsers));

    dispatch(add_todo(todo));
  };
};

export default addTodo;

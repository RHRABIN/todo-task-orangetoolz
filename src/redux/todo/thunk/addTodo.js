import { add_todo } from "../actions";

const addTodo = (todo) => {
  return async (dispatch) => {
    // declare an object for storing the localStorage data

    let storeTodo = JSON.parse(localStorage.getItem("all-todo"));
    if (storeTodo) {
      storeTodo = [...storeTodo, todo];
    } else {
      storeTodo = [todo];
    }
    localStorage.setItem("all-todo", JSON.stringify(storeTodo));

    dispatch(add_todo(todo));
  };
};

export default addTodo;

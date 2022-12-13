import { fetch_todo } from "../actions";

const fetchTodo = () => {
  return async (dispatch) => {
    // declare an object for storing the localStorage data

    const storeTodo = JSON.parse(localStorage.getItem("all-todo"));

    dispatch(fetch_todo(storeTodo));
  };
};

export default fetchTodo;

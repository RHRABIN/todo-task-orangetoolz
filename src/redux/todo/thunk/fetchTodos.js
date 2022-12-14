import { fetch_todo } from "../actions";

const fetchTodo = () => {
  return async (dispatch) => {
    const storeTodo = JSON.parse(localStorage.getItem("all-todo"));
    dispatch(fetch_todo(storeTodo));
  };
};

export default fetchTodo;

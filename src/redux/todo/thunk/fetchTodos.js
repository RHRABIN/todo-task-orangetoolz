import { fetch_todo } from "../actions";

const fetchTodo = () => {
  return async (dispatch) => {
    // fetch_todo from localStorage and dispatch fetch_todo actions with get all todo as parameters
    const storeTodo = JSON.parse(localStorage.getItem("all-todo"));
    dispatch(fetch_todo(storeTodo));
  };
};

export default fetchTodo;

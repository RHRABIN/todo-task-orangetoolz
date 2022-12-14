import { delete_todo } from "../actions";

const deleteTodo = (id) => {
  return (dispatch) => {
    let storeRemainingTodo = "";
    const storedTodo = JSON.parse(localStorage.getItem("all-todo"));
    if (storedTodo) {
      storeRemainingTodo = storedTodo.filter((todo) => todo?.id !== id);
    }

    localStorage.setItem("all-todo", JSON.stringify(storeRemainingTodo));

    dispatch(delete_todo(id));
  };
};

export default deleteTodo;

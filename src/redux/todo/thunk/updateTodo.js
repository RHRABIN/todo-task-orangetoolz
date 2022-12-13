import { update_todo } from "../actions";

const updateTodo = (id, todo) => {
  return (dispatch) => {
    let storedTodo = JSON.parse(localStorage.getItem("all-todo"));
    if (storedTodo) {
      storedTodo.map((t) => {
        if (t.id !== id) {
          return t;
        } else {
          return todo;
        }
      });
    }
    localStorage.setItem("all-todo", JSON.stringify(storedTodo));

    dispatch(update_todo(id, todo));
  };
};

export default updateTodo;

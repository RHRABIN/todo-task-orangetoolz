import { update_todo } from "../actions";

const updateTodo = (id, todo) => {
  return (dispatch) => {
    let storeUpdatedTodo = [];
    const storedTodo = JSON.parse(localStorage.getItem("all-todo"));
    if (storedTodo) {
      storedTodo.map((t) => {
        if (t.id !== id) {
          return storeUpdatedTodo.push(t);
        } else {
          console.log("enter", todo);
          return storeUpdatedTodo.push(todo);
        }
      });
    }
    console.log(storeUpdatedTodo);
    localStorage.setItem("all-todo", JSON.stringify(storeUpdatedTodo));

    dispatch(update_todo(id, todo));
  };
};

export default updateTodo;

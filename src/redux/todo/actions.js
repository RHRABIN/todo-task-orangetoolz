import { ADD_TODO, DELETE_TODO } from "./actionsType";

// * @ ADD_TODO
// * @param {A todo object} todo
// * @returns {object with type ADD_TODO and payload todo object}
export const add_todo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

// * @ DELETE_TODO
// * @param {A todo Id } todo
// * @returns {object with type DELETE_TODO and payload todoID}
export const delete_todo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};

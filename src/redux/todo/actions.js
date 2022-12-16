import { ADD_TODO, DELETE_TODO, FETCH_TODO, UPDATE_TODO } from "./actionsType";

// * @ ADD_TODO
// * @param {A todo object} todo
// * @returns {object with type ADD_TODO and payload todo object}

export const add_todo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

// * @DELETE_TODO
// * @param {A todo Id } todo
// * @returns {object with type DELETE_TODO and payload todoID}

export const delete_todo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};

// * @UPDATE_TODO
// * @param {A todo Id and todo object } todo
// * @returns {object with type DELETE_TODO and payload todoID}

export const update_todo = (todoId, todo) => {
  return {
    type: UPDATE_TODO,
    payload: {
      id: todoId,
      todo: todo,
    },
  };
};

// * @FETCH_TODO
// * @param {no parameter} todo
// * @returns {Array of todos}

export const fetch_todo = (todos) => {
  return {
    type: FETCH_TODO,
    payload: todos,
  };
};

import { ADD_TODO, DELETE_TODO } from "./actionsType";
import { initialState } from "./initialState";

const todoReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default todoReducer;

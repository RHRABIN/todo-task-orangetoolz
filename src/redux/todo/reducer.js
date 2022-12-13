import { ADD_TODO, DELETE_TODO, FETCH_TODO, UPDATE_TODO } from "./actionsType";
import { initialState } from "./initialState";

const todoReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case FETCH_TODO:
      return (state = action.payload);

    case ADD_TODO:
      return [...state, action.payload];

    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return action.payload.todo;
      });

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default todoReducer;

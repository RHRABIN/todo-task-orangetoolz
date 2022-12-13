import { ADD_TODO, DELETE_TODO } from "./actionsType";
import { initialState } from "./initialState";

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: new Date(),
          name: action.payload,
          status: "to-do",
          createdAt: new Date(),
        },
      ];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default todoReducer;

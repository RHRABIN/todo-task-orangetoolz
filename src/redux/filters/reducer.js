import { FILTER_TEXT } from "./actionsType";

const initialState = {
  searchText: "",
};

const filterReducer = (state = initialState, action) => {
  if (action.type === FILTER_TEXT) {
    return (state.searchText = action.payload);
  }
};

export default filterReducer;

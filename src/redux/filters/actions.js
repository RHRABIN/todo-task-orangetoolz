import { FILTER_TEXT } from "./actionsType";

export const searchText = (text) => {
  return { action: FILTER_TEXT, payload: text };
};

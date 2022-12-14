import { FILTER_TEXT } from "./actionsType";

export const searchText = (text) => {
  console.log(text);
  return { type: FILTER_TEXT, payload: text };
};

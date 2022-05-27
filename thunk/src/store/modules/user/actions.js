import { ADD_COMMENT } from "./actionsTypes";

export const addComment = (payload) => ({
  type: ADD_COMMENT,
  payload,
});
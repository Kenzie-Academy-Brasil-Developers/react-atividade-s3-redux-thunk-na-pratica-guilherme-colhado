import { addComment } from "./actions";

// o comment é o que recebemos de fora, no caso será o comentário
export const addCommentThunk = (comment) => {

    return (dispatch, getState) => {

	const { user } = getState();

	const updatedUser = { ...user, comments: [...user.comments, comment] };

	dispatch(addComment(updatedUser));
  };
};

import { resetErrorAction } from "./Action";

export const resetError = () => async (dispatch) => {
  dispatch(resetErrorAction());
};

import axios from "axios";
import { baseURL } from "./constants";

const apiMiddleware = (store) => (next) => async (action) => {
  if (action.type !== "apiCallBegan") {
    return next(action);
  }

  const { url, method, data, onSuccess, onError } = action.payload;

  try {
    const response = await axios.request({
      baseURL,
      url,
      method,
      data,
    });

    store.dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    store.dispatch({
      type: onError,
      error: `${error.message} (${onError})`,
    });
  }
};

export default apiMiddleware;

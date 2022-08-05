import axios from "axios";
import { getErrorMessage } from "./getErrorMessage";

axios.defaults.baseURL = process.env.REACT_APP_API;

export const axiosRequest = async (axiosParams) => {
  try {
    const response = await axios.request(axiosParams);
    return { status: "done", response: response.data };
  } catch (error) {
    // get error code from error response
    const message = error.response
      ? error.response.data.error
      : "AN_ERROR_HAS_OCCURRED";

    return {
      status: "error",
      response: getErrorMessage(message),
      code: message,
    };
  }
};

import * as Types from "./types";

export const setHeaderName = (name) => {
  return ({
    type: Types.SET_HEADER_NAME,
    payload: { name },
  })
};
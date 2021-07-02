import * as Types from "./types";

const initialState = { name: "Restaraunts" };

function headerNameReducer(state = initialState, action){
  switch (action.type) {
    case Types.SET_HEADER_NAME:
      return {
        ...state,
        name: action.payload.name,
      };

    default:
      return state;
  }
}

export default headerNameReducer;
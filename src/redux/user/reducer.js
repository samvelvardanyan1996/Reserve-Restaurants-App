import * as Types from "./types";

const initialState = { currentLocation: null };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_CURRENT_GEOLOCATION:
      return {
        ...state,
        currentLocation: { ...state.currentLocation, ...action.payload.geo },
      };

    default:
      return state;
  }
}

export default userReducer;

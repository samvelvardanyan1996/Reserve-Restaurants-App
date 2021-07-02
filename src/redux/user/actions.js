import * as Types from "./types";

export const setCurrentGeoLocation = (geo) => ({
  type: Types.SET_CURRENT_GEOLOCATION,
  payload: { geo },
});
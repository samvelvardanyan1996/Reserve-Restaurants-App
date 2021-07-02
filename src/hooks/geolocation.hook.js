import { useState, useEffect } from "react";

const defaultCoordsState = {
  accuracy: null,
  altitude: null,
  altitudeAccuracy: null,
  heading: null,
  latitude: null,
  longitude: null,
  speed: null,
  timestamp: null,
  error: null,
};

export const useGeolocation = (
  { enableHighAccuracy = false, maximumAge = 0, timeout = 5000, watchLocation = false },
  callback = false
) => {
  const [coords, setCoords] = useState(defaultCoordsState);

  useEffect(() => {
    let unsubscribe = false;

    const updateCoords = ({coords = {}, timestamp}) => {
      const {
        accuracy,
        altitude,
        altitudeAccuracy,
        heading,
        latitude,
        longitude,
        speed,
      } = coords;

    //   console.log(coords, "Latitude updateCoords");
      if (unsubscribe || !latitude || !longitude) return;

      setCoords({
        accuracy,
        altitude,
        altitudeAccuracy,
        heading,
        latitude,
        longitude,
        speed,
        timestamp,
        error: null,
      });

      if (callback instanceof Function)
        callback({
          accuracy,
          altitude,
          altitudeAccuracy,
          heading,
          latitude,
          longitude,
          speed,
          timestamp,
          error: null,
        });
    };

    const setError = (error) => {
      if (unsubscribe) return;

      setError({
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: null,
        error,
      });
    };

    let watchId;
    navigator?.geolocation.getCurrentPosition(updateCoords, setError);

    if (watchLocation) {
      watchId = navigator?.geolocation.watchPosition(updateCoords, setError, {
        enableHighAccuracy,
        maximumAge,
        timeout,
      });
    }

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
      unsubscribe = true;
    };
  }, [callback]);

  return { coords };
};

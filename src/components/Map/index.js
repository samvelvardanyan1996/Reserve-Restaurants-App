import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import CurrentLocationButton from "./CurrentLocationButton";
import { currentLocationSelector } from "../../redux/user/selectors";

const Map = ({ currentLocation }) => {
  useEffect(() => {
    animateToRegion(currentLocation);
  }, [currentLocation]);

  const mapRef = React.useRef(null);

  const animateToRegion = React.useCallback(
    (r) => {
      if (!mapRef.current) return;

      mapRef.current.animateToRegion(r, 1500);
    },
    [mapRef]
  );

  return (
    <>
      <MapView
        ref={mapRef}
        minZoomLevel={8}
        showsUserLocation={true}
        showsMyLocationButton={false}
        provider={PROVIDER_GOOGLE}
        followsUserLocation={true}
        style={{ width: "100%", height: "100%" }}
      >
      </MapView>

      <CurrentLocationButton animateToRegion={(r) => animateToRegion(r)} />
    </>
  );
};

const mapStateToProps = (state) => ({
  currentLocation: currentLocationSelector(state),
});

export default connect(mapStateToProps, null)(Map);
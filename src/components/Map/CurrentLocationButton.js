import * as React from "react";
import { connect } from "react-redux";
import { StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { getRegionForMap } from "../../utils/get/RegionForMap";
import { useGeolocation } from "../../hooks/geolocation.hook";
import { setCurrentGeoLocation } from "../../redux/user/actions";
import { useCallOnceOnCondition } from "../../hooks/onceOnCondition.hook";

const WIDTH = Dimensions.get("window").width;

const CurrentLocationButton = function ({ animateToRegion, setCurrentGeoLocation }) {
  const { coords } = useGeolocation(
    { enableHighAccuracy: false, watchLocation: true },
    // loc
  );
  const loading = !coords.latitude || !coords.longitude;

  useCallOnceOnCondition(() => setCurrentGeoLocation(getRegionForMap(coords)), coords.latitude && coords.longitude);

  const getLocationFromHook = () => {
    animateToRegion(getRegionForMap(coords));
  };

  return (
    <>
      <TouchableOpacity
        onPress={getLocationFromHook}
        disabled={loading}
        style={[styles.container]}
      >
        {loading ? (
          <ActivityIndicator size="large" color="#FBD100" />
        ) : (
          <MaterialIcons name="my-location" color="#242b3b" size={30} />
        )}
      </TouchableOpacity>
    </>
  );
};

const mapDispatchToProps = {
  setCurrentGeoLocation,
};

export default connect(
  null,
  mapDispatchToProps
)(CurrentLocationButton);

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    position: "absolute",
    width: WIDTH / 6,
    height: WIDTH / 6,
    bottom: WIDTH / 30,
    left: WIDTH / 30,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0.5 * 8 },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * 8,
  },
});

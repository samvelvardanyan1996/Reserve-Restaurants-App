
/**
 *  Return formatted region data for GoogleMap 
 * 
 * @param {float} latitude 
 * @param {float} longitude 
 */
 export const getRegionForMap = ({ latitude, longitude }) => ({
  latitude: parseFloat(latitude),
  longitude: parseFloat(longitude),
  latitudeDelta: 0.015,
  longitudeDelta: 0.015,
});

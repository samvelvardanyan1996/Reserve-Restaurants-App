import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import getHeaderBarOptions from "../../utils/get/Options/HeaderBarOptions";
import MapScreen from "../../Screens/Root/MapScreen";

const Stack = createStackNavigator();


const MapStackNavigator = ({ route }) => {
  let MapHeaderBarOptions = getHeaderBarOptions(route, "Map", "sendToMenu");

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={MapHeaderBarOptions}
      />
    </Stack.Navigator>
  );
}

export default MapStackNavigator;
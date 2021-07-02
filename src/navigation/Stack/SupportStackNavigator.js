import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import getHeaderBarOptions from "../../utils/get/Options/HeaderBarOptions";
import SupportScreen from "../../Screens/Root/SupportScreen";

const Stack = createStackNavigator();


const SupportStackNavigator = ({ route }) => {
  let MapHeaderBarOptions = getHeaderBarOptions(route, "Support", "sendToMenu");

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Support"
        component={SupportScreen}
        options={MapHeaderBarOptions}
      />
    </Stack.Navigator>
  );
}

export default SupportStackNavigator;
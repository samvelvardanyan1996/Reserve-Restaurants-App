import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import getHeaderBarOptions from "../../utils/get/Options/HeaderBarOptions";
import AboutScreen from "../../Screens/Root/AboutScreen";

const Stack = createStackNavigator();


const AboutStackNavigator = ({ route }) => {
  let AboutHeaderBarOptions = getHeaderBarOptions(route, "About Us", "sendToMenu");

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={AboutHeaderBarOptions}
      />
    </Stack.Navigator>
  );
}

export default AboutStackNavigator;
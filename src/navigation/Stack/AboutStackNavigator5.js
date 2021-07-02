import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import getHeaderBarOptions from "../../utils/get/Options/HeaderBarOptions";
import AboutScreen5 from "../../Screens/Root/AboutScreen5";

const Stack = createStackNavigator();


const AboutStackNavigator = ({ route }) => {
  let AboutHeaderBarOptions5 = getHeaderBarOptions(route, "About5 Us", "sendToMenu");

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={AboutScreen5}
        options={AboutHeaderBarOptions5}
      />
    </Stack.Navigator>
  );
}

export default AboutStackNavigator;
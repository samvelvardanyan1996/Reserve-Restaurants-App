import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import getHeaderBarOptions from "../../utils/get/Options/HeaderBarOptions";
import ContactScreen from "../../Screens/Root/ContactScreen";

const Stack = createStackNavigator();


const ContactStackNavigator = ({ route }) => {
  let ContactHeaderBarOptions = getHeaderBarOptions(route, "Contact Us", "sendToMenu");

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={ContactHeaderBarOptions}
      />
    </Stack.Navigator>
  );
}

export default ContactStackNavigator;
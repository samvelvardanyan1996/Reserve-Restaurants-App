import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import getHeaderBarOptions from "../../utils/get/Options/HeaderBarOptions";

import MainScreen from "../../Screens/Stack/MainScreen";
import TablesScreen from "../../Screens/Stack/TablesScreen";
import FoodsScreen from "../../Screens/Stack/FoodsScreen";
import ReserveTableScreen from "../../Screens/Stack/ReserveTableScreen";

const Stack = createStackNavigator();

const HomeStackNavigator = ({ route }) => {
  let MainHeaderBarOptions          = getHeaderBarOptions(route, "Home", "sendToMenu");
  let TablesHeaderBarOptions        = getHeaderBarOptions(route, "Tables", "goBack");
  let FoodsHeaderBarOptions         = getHeaderBarOptions(route, "Foods", "goBack");
  let ReserveTableHeaderBarOptions  = getHeaderBarOptions(route, "Reserve Table", "goBack");

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Main'
        component={MainScreen}
        options={MainHeaderBarOptions}
      />
      <Stack.Screen
        name="Tables"
        component={TablesScreen}
        options={TablesHeaderBarOptions}
      />
      <Stack.Screen
        name="Foods"
        component={FoodsScreen}
        options={FoodsHeaderBarOptions}
      />
      <Stack.Screen
        name="Reserve"
        component={ReserveTableScreen}
        options={ReserveTableHeaderBarOptions}
      />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
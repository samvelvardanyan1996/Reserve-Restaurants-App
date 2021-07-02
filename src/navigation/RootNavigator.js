import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Menu from "../components/Menu";

import HomeStackNavigator from "./Stack/HomeStackNavigator";
import MapStackNavigator from "./Stack/MapStackNavigator";
import ContactStackNavigator from "./Stack/ContactStackNavigator";
import SupportStackNavigator from "./Stack/SupportStackNavigator";
import AboutStackNavigator from "./Stack/AboutStackNavigator";

import About5StackNavigator from "./Stack/AboutStackNavigator5";


const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <Menu {...props} />}>
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="Map" component={MapStackNavigator} />
        <Drawer.Screen name="Support" component={SupportStackNavigator} />
        <Drawer.Screen name="Contact Us" component={ContactStackNavigator} />
        <Drawer.Screen name="About" component={AboutStackNavigator} />
        <Drawer.Screen name="About5" component={About5StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
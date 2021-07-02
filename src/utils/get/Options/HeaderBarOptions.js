import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

import getHeaderTitle from "./HeaderTitle";
import SelectAction from "../../../components/SelectAction";

const getHeaderBarOptions = ({route}, nameOptions, nameComponent) => {
  const navigation = useNavigation();

  let HeaderBarOptions = ({navigation, route}) => ({
    headerStyle: {
      backgroundColor: "red",
      height: 65,
    },
    headerTitleStyle: {
      color: "white",
      textAlign: "center",
      fontSize: 20,
    },
    title: getHeaderTitle(route, nameOptions),
    headerLeft: () => (
      <SelectAction nameComponent={nameComponent} />
    ),
    headerRight: () => (
      <Icon
        name="search"
        color="black"
        iconStyle={styles.headersIcons}
        onPress={() => navigation.openDrawer()}
      />
    ),
  });

  return HeaderBarOptions;
}
  
const styles = StyleSheet.create({
  headersIcons: {
    color: "white",
    padding: 20,
    fontSize: 24,
  },
});

export default getHeaderBarOptions;
import React from "react";
import { StyleSheet, } from "react-native";
import { Icon } from "react-native-elements";

import { useNavigation } from '@react-navigation/native';


const GoBack = () => {
  const navigation = useNavigation();

  return (
    <Icon
      name='reply'
      color="white"
      iconStyle={styles.headersIcons}
      onPress={() => navigation.goBack({params: { titleRestaurant: "Home" }})}
    />
  );
}

const styles = StyleSheet.create({
  headersIcons: {
    padding: 20,
    fontSize: 24,
  },
})

export default GoBack;
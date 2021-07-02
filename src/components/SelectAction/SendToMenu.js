import React from "react";
import { StyleSheet, } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';


const SendToMenu = () => {
  const navigation = useNavigation();

  return (
    <Icon
      name='menu'
      color="white"
      iconStyle={styles.headersIcons}
      onPress={() => navigation.openDrawer()}
    />
  );
}

const styles = StyleSheet.create({
  headersIcons: {
    padding: 20,
    fontSize: 24,
  },
})

export default SendToMenu;
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const ShowRestaurantsOrMap = () => (
  <View style={styles.blockContainer}>
    <Text style={styles.text2Container}>Near me</Text>
    <View style={styles.buttonsContainer}>
      <Button color="black" style={styles.buttonContainer} labelStyle={styles.buttonContent} onPress={() => console.log('Pressed')}>List</Button>
      <Button color="black" style={styles.buttonContainer} labelStyle={styles.buttonContent} onPress={() => console.log('Pressed')}>Map</Button>
    </View>
  </View>
);

const styles = StyleSheet.create({
  text2Container: {
    paddingTop: 5,
    paddingBottom: 10,
    marginHorizontal: "4%",
  },
  blockContainer: {
    paddingBottom: 15,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: "2%",
    paddingHorizontal: "4%",
  },
  buttonContainer: {
    backgroundColor: "white",
    marginRight: "2%",
    borderBottomWidth: 1,
    borderColor: "#bbbbbb2f",
  },
  buttonContent: {
    color: "black",
    textTransform: "none",
    padding: 0,
    fontSize: 12,
  }
})

export default ShowRestaurantsOrMap;
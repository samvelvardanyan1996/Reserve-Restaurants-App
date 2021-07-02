import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const SendDateOfReservation = () => (
  <View style={styles.blockContainer}>
    <Text style={styles.text1Container}>Date of reservation</Text>
    <View style={styles.buttonsContainer}>
      <Button color="black" style={styles.buttonContainer} labelStyle={styles.buttonContent} onPress={() => console.log('Pressed')}>Thu, 27 May</Button>
      <Button color="black" style={styles.buttonContainer} labelStyle={styles.buttonContent} onPress={() => console.log('Pressed')}>Fri, 28 May</Button>
      <Button color="black" style={styles.buttonContainer} labelStyle={styles.buttonContent} onPress={() => console.log('Pressed')}>Sat, 29 May</Button>
      <Button color="black" style={styles.buttonContainer} labelStyle={styles.buttonContent} onPress={() => console.log('Pressed')}>Sun, 30 May</Button>
    </View>
  </View>
);

const styles = StyleSheet.create({
  blockContainer: {
    paddingBottom: 15,
  },
  text1Container: {
    paddingTop: 25,
    paddingBottom: 10,
    marginHorizontal: "4%",
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

export default SendDateOfReservation;
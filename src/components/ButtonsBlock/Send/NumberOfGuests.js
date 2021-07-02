import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import { Button } from 'react-native-paper';

const SendNumberOfGuests = () => (
  <View style={styles.blockContainer}>
    <Text style={styles.text1Container}>Number of Guests</Text>
    <View style={styles.buttonsContainer}>
      <Button compact={true} style={styles.leftNumberButton} contentStyle={styles.leftNumberButtonText} labelStyle={styles.leftNumberButtonText}>
      {/* <Button compact={true} style={{backgroundColor: "grey", padding: 0, margin: 0, justifyContent: "center"} } onPress > */}
        <Text>-</Text>
      </Button>
      {/* <TextInput
        style={styles.numberOfGuests}
        keyboardType="numeric"
        // onChangeText={onChangeText}
        // value={text}
      />
      <Button style={styles.rightNumberButton}>
        <Text>+</Text>
      </Button> */}
    </View>
  </View>
);

const styles = StyleSheet.create({
  leftNumberButtonText: {
    // margin: 0,
    // padding: 0
  },
  leftNumberButton: {
    // height: 40,
    // width: 30,
    backgroundColor: "grey",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    margin: 0,
    padding: 0,
    justifyContent:"center"
  },
  rightNumberButton: {
    height: 40,
    width: 30,
    backgroundColor: "grey",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  numberOfGuests: {
    height: 40,
    borderWidth: 1,
  },
  blockContainer: {
    paddingBottom: 15,
  },
  text1Container: {
    paddingTop: 25,
    paddingBottom: 10,
    marginHorizontal: "4%",
  },
  buttonsContainer: {
    // flex: 1,
    // flexDirection: "row",
    // paddingVertical: "2%",
    // paddingHorizo/ntal: "4%",
    width: 40,
    justifyContent:"center"
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

export default SendNumberOfGuests;
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

import getImageHeight from "../../../../../../utils/get/Image/Height";
import {windowWidth} from "../../../../../../constants";

const TableShow = ({ reserveTable, description, image, }) => {
  const navigation = useNavigation();

  let currentImage = require("../../../../../../image/preloader.jpg");
  let currentImage2 = 'https://reactnative.dev/img/tiny_logo.png';
  let imageWidth  = ((windowWidth/2) * 53/60);
  let imageHeight = 101;
  // let imageHeight = getImageHeight(currentImage2, imageWidth, "global");

  let index = 1;

  return (
    <>
      <View style={styles.containerRestaurant}>
        <View style={{width: imageWidth, maxHeight: imageHeight}}>
          {/* <Image style={styles.restaurantImageDescription} source={currentImage} /> */}
          <Image
            style={styles.restaurantImageDescription}
            source={{
              uri: currentImage2
            }}
          />
        </View>
        <Button color="black" labelStyle={styles.restaurantReserveTable} onPress={() => navigation.navigate({name: "Reserve", params: { reserveTableName: reserveTable }})}>{reserveTable}</Button>
        <Text style={styles.restaurantDescription}>{description}</Text>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  restaurantImageDescription: {
    width: "100%",
    height: "100%",
  },
  containerRestaurant: {
    width:  ((windowWidth/2) * 53/60),
    height: ((windowWidth/2) * 53/60),
    backgroundColor: '#fff',
    marginLeft:   ((windowWidth/2) * 7/90),
    marginBottom: ((windowWidth/2) * 7/90),
    borderRadius: 5
  },
  restaurantMarginItem: {
    height: 16,
  },
  restaurantReserveTable: {
    color: "red",
    textTransform: "none",
    marginLeft: 0,
    marginBottom: 1,
  },
  restaurantDescription: {
    color: "#9f9f9f",
    marginLeft: 6,
    fontSize: 12
  },
});

export default TableShow;
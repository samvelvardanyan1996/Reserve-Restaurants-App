import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

import getImageWidth from "../../../utils/get/Image/Width";

const Restaurant = ({ title, description, image, index }) => {
  const navigation = useNavigation();

  let currentImage = require('../../../image/preloader.jpg');
  let imageHeight = 50;
  let imageWidth  = getImageWidth(currentImage, imageHeight, "local");

  return (
    <View>
      <View style={styles.containerRestaurant}>
        <View style={{width: imageWidth, maxHeight: imageHeight}}>
          <Image style={styles.restaurantImageDescription} source={currentImage} />
        </View>
        <View>
          <Button color="black" style={styles.restaurantContentTitle} contentStyle={styles.restaurantContentTitle} containerStyle={styles.restaurantContentTitle} labelStyle={styles.restaurantContentTitle} onPress={() => navigation.navigate({name: "Tables", params: { indexElement: index, titleRestaurant: title }})}>{title}</Button>
          <Text style={styles.restaurantDescription}>{description}</Text>
        </View>
      </View>
      <View style={styles.restaurantMarginItem}></View>
    </View>
  )
};

const styles = StyleSheet.create({
  restaurantImageDescription: {
    width: "100%",
    height: "100%",
  },
  containerRestaurant: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  restaurantMarginItem: {
    height: 16,
  },
  restaurantContentTitle: {
    color: "red",
    marginTop: 0,
    justifyContent: "flex-start",
  },
  restaurantDescription: {
    color: "#9f9f9f",
    paddingHorizontal: 16,
  },
});

export default Restaurant;
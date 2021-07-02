import * as React from 'react';
import { StyleSheet, SafeAreaView, View, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';

import getImageHeight from "../utils/get/Image/Height";
import {logoImage, windowWidth} from "../constants";


const Menu = (props) => {
  let currentImage = require('../image/preloader.jpg');
  let imageWidth  = ((windowWidth/2) * 53/60);
  let imageHeight = getImageHeight(currentImage, imageWidth, "local");

  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={{width: imageWidth, maxHeight: imageHeight}}>
          <Image style={styles.restaurantImageDescription} source={logoImage} />
        </View>
      </SafeAreaView>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}


const styles = StyleSheet.create({
  restaurantImageDescription: {
    flexDirection: 'row',
    paddingBottom: 20,
    width: "100%",
    height: "100%",
  },
});

export default Menu;
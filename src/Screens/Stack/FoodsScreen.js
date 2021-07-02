import React from 'react';
import { useNavigation } from '@react-navigation/native';

import getHeaderTitle from "../../utils/get/Options/HeaderTitle";
import Food from "../../components/Restaurants/Restaurant/Food";


const FoodsScreen = ({ route }) => {
  const navigation = useNavigation();
  let foodName = route.params?.foodName;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: getHeaderTitle(route, foodName),
    });
  }, [navigation, route, foodName]);

  console.log("foodName", foodName);
  return (
    <Food />
  );
}

export default FoodsScreen;
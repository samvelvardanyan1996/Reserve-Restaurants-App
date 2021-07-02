import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import getHeaderTitle from "../../utils/get/Options/HeaderTitle";
import Tables from "../../components/Restaurants/Restaurant/Tables";


const TablesScreen = ({ route }) => {
  const navigation = useNavigation();
  let titleRestaurant = route.params?.titleRestaurant;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: getHeaderTitle(route, titleRestaurant),
    });
  }, [navigation, route, titleRestaurant]);
  return (
    <ScrollView>
      <View style={styles.containerTables}>
        <Tables route={route} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerTables: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default TablesScreen;
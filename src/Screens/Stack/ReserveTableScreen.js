import React from 'react';
import { useNavigation } from '@react-navigation/native';

import getHeaderTitle from "../../utils/get/Options/HeaderTitle";
import ReserveTable from "../../components/Restaurants/Restaurant/Tables/Table/Reserve";


const ReserveTableScreen = ({ route }) => {
  const navigation = useNavigation();
  let reserveTableName = route.params?.reserveTableName;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: getHeaderTitle(route, reserveTableName),
    });
  }, [navigation, route, reserveTableName]);

  return (
    <ReserveTable />
  );
}

export default ReserveTableScreen;
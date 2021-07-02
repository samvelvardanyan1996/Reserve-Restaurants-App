import React from 'react';
import { FlatList } from 'react-native';

import ButtonsBlock from "../../components/ButtonsBlock";
import Restaurants from "../../components/Restaurants";
import { DATA } from "../../constants";


const MainScreen = () => {
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={Restaurants}
        keyExtractor={item => item.id}
        ListHeaderComponent={ButtonsBlock}
      />
    </>
  );
}

export default MainScreen;
import React from 'react';
import FiltersByFoods from "./FiltersByFoods";
import ShowRestaurantsOrMap from './ShowRestaurantsOrMap';


const ButtonsBlock = () => {
  return (
    <>
      <FiltersByFoods />
      <ShowRestaurantsOrMap />
    </>
  )
};

export default ButtonsBlock;
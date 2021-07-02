import React from 'react';
import Restaurant from "./Restaurant";

const Restaurants = ({ item, index }) => {
  return (
    <Restaurant
      title={item.title}
      description={item.description}
      image={item.image}
      index={index}
    />
  )
};

export default Restaurants;
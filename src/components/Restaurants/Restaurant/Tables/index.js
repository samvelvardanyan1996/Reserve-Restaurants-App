import React from 'react';
import TableShow from "./Table/Show";
import { DATA } from "../../../../constants";

const Tables = ({route}) => {
  let tableArray = DATA[route.params?.indexElement].tables;

  let ReturnTables = tableArray.map((item) => {
    return (
      <TableShow
        reserveTable={item.reserveTable}
        description={item.description}
        image={item.image}
        key={item.id}
      />
    )
  });

  return ReturnTables;
}

export default Tables;
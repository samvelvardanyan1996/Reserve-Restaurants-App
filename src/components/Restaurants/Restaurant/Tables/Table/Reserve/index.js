import React from 'react';
import { View } from "react-native";
import SendDateOfReservation from "../../../../../ButtonsBlock/Send/DateOfReservation";
import SendNumberOfGuests from "../../../../../ButtonsBlock/Send/NumberOfGuests";
import SendAvailableTimes from "../../../../../ButtonsBlock/Send/AvailableTimes";


const ReserveTable = () => {
  return (
    <View style={{position: "absolute"}}>
      <SendDateOfReservation />
      <SendNumberOfGuests />
      <SendAvailableTimes />
    </View>
  )
};

export default ReserveTable;
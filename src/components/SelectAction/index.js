import React from "react";
import SendToMenu from "./SendToMenu";
import GoBack from "./GoBack";

const SelectAction = ({nameComponent}) => {
  if(nameComponent === "goBack"){
    return <GoBack />;
  }
  return <SendToMenu />;
}

export default SelectAction;
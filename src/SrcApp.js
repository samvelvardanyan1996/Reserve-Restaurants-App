import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";

import RootNavigator from "./navigation/RootNavigator";
import store from "./redux/configureStore";

const SrcApp = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#9f011d" barStyle="#9f011d" />
      <RootNavigator />
    </Provider>
  );
}

export default SrcApp;
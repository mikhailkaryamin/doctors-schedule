import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { Operation as DoctorsOperation } from "./reducer/doctors/doctors";
import reducer from "./reducer/reducer";

import Navigation from "./navigation";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(DoctorsOperation.readDoctorsListFromStorage());

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

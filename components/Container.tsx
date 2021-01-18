import React from "react";
import { View, StyleSheet } from "react-native";

import { PropsContainer } from "../shared/types";

const Container = ({ children }: PropsContainer) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 30,
    paddingLeft: 20,
  }
});

export default Container;


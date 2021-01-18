import React from "react";
import { View, StyleSheet } from "react-native";

import { PropsContainer } from "../shared/types";

const ContainerButton = ({ children }: PropsContainer) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
    paddingRight: "5%",
    paddingLeft: "5%",
  },
});

export default ContainerButton;

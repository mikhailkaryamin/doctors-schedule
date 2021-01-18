import React from "react";
import { View, StyleSheet } from "react-native";

import { PropsContainer } from "../shared/types";

const ContainerToBottom = ({ children }: PropsContainer) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
  }
});

export default ContainerToBottom;

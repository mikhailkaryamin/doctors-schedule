import React from "react";
import { View, StyleSheet } from "react-native";

import { PropsContainer } from "../shared/types";
import { ColorScheme } from "../shared/consts";

const ContainerItemCreate = ({ children }: PropsContainer) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: ColorScheme.TITAN_WHITE
  }
});

export default ContainerItemCreate;

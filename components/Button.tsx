import React from "react";
import { View, Pressable, Text, Image, StyleSheet } from "react-native";

import { ColorScheme, IconForButton } from "../shared/consts";
import { PropsButton } from "../shared/types";

const Button = ({ onPress, iconName, color, title }: PropsButton) => {
  const isHaveIcon = typeof iconName === "string";

  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <Text style={styles.title}>{title}</Text>
        {isHaveIcon && (
          <Image style={styles.icon} source={IconForButton[iconName]} />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    width: "100%",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 3,
  },
  title: {
    color: ColorScheme.WHITE,
  },
  icon: {
    position: "absolute",
    right: 20,
  },
});

export default Button;

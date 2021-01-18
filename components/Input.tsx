import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import { PropsInput } from "../shared/types";
import { ColorScheme } from "../shared/consts";

const Input = ({ title, placeholder, onChange }: PropsInput) => {
  return (
    <View>
      <Text style={styles.title}>
        {title}
      </Text>
      <TextInput
        onChangeText={(text) => onChange(text)}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
    color: ColorScheme.MATTERHORN
  },
  input: {
    height: 16,
    fontSize: 16,
    lineHeight: 16,
  }
});

export default Input;

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { PropsSelect } from "../shared/types";
import { ColorScheme } from "../shared/consts";

const Select = ({ title, placeholder, listItems, onChange }: PropsSelect) => {
  const [value, setValue] = useState("");

  const onChangeValue = (newValue) => {
    setValue(newValue);
    onChange(listItems[newValue]);
  };

  const items = Object.entries(listItems).map((item) => {
    const [valueItem, label] = item;
    return {
      label,
      value: valueItem,
    };
  });
  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <RNPickerSelect
        onValueChange={onChangeValue}
        value={value}
        useNativeAndroidPickerStyle={false}
        style={{ inputAndroid: styles.inputAndroid }}
        items={items}
        placeholder={{ label: placeholder, value: null }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
    color: ColorScheme.MATTERHORN,
  },
  picker: {
    height: 16,
  },
  item: {
    backgroundColor: "#FFF0E0",
    borderColor: "black",
    borderWidth: 1,
  },
  inputAndroid: {
    height: 16,
    fontSize: 16,
    lineHeight: 16,
    color: "black",
    paddingRight: 30,
  },
});

export default Select;

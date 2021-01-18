import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { ColorScheme } from "../shared/consts";
import { PropsCard } from "../shared/types";

const Card = ({
  firstName,
  middleName,
  lastName,
  uriImg,
  position,
}: PropsCard) => {

  return (
    <View style={styles.card}>
      <View style={styles.image}>
        <Image source={{ uri: uriImg }} style={styles.image} />
      </View>
      <View style={styles.description}>
        <Text style={{ ...styles.font, ...styles.name }}>{lastName}</Text>
        <Text style={{ ...styles.font, ...styles.name }}>{firstName}</Text>
        <Text style={{ ...styles.font, ...styles.name }}>{middleName}</Text>
        <Text style={{ ...styles.font, ...styles.position }}>{position}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
    borderColor: ColorScheme.GAINSBORO,
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 120,
    marginRight: 20,
  },
  description: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  font: {
    fontSize: 16,
    lineHeight: 24,
  },
  name: {
    fontWeight: "700",
  },
  position: {
    fontWeight: "400",
  },
});

export default Card;

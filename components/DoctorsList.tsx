import React from "react";
import { useDispatch } from "react-redux";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { Operation as DoctorsOperation } from "../reducer/doctors/doctors";
import NameSpace from "../reducer/name-space";

import { RenderItem } from "../shared/types";
import { ColorScheme } from "../shared/consts";

import Card from "./Card";

const RightAction = () => (
  <View style={styles.rightAction}>
    <Text style={styles.textAction}>Удалить</Text>
  </View>
);

const DoctorsList = () => {
  const dispath = useDispatch();

  const doctorsList = useSelector(
      (state) => state[NameSpace.DOCTORS].doctorsList
  );

  const renderItem = ({ item }: RenderItem) => (
    <Swipeable
      renderRightActions={RightAction}
      onSwipeableRightOpen={() => dispath(DoctorsOperation.removeDoctorFromStorage(item.id))}
    >
      <Card
        firstName={item.firstName}
        middleName={item.middleName}
        lastName={item.lastName}
        position={item.position}
        uriImg={item.uriImg}
      />
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={doctorsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  rightAction: {
    backgroundColor: ColorScheme.RED,
    justifyContent: "center",
    paddingRight: 10,
    paddingLeft: 10,
  },
  textAction: {
    fontSize: 16,
  }
});

export default DoctorsList;

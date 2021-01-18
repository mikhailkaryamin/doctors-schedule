import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Text, View } from "react-native";

import { ColorScheme, TitleButton, DoctorsPosition, Screen } from "../shared/consts";
import { PropsCreate } from "../shared/types";

import { Operation as DoctorsOperation } from "../reducer/doctors/doctors";

import Container from "../components/Container";
import ContainerItemCreate from "../components/ContainerItemCreate";
import ContainerToBottom from "../components/ContainerToBottom";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

import ImagePicker from "../components/ImagePicker";

const Create = ({ navigation }: PropsCreate) => {
  const dispatch = useDispatch();

  const [uriImg, setUriImg] = useState(null);
  const [name, setName] = useState(null);
  const [position, setPosition] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const isButtonActive = uriImg && name && position;

  const onPressButton = () => {
    if (isButtonActive) {
      const [firstName = "", middleName = "", lastName = ""] = name.split(" ");

      const newDoctor = {
        firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
        middleName: middleName.charAt(0).toUpperCase() + middleName.slice(1),
        lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
        uriImg,
        position,
      };

      dispatch(DoctorsOperation.writeNewDoctorToStorage(newDoctor));
      setShowAlert(false);
      navigation.navigate(Screen.MAIN);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <Container>
      <ImagePicker onChange={setUriImg} />
      <ContainerItemCreate>
        <Input title="Имя" placeholder="Введите имя врача" onChange={setName} />
      </ContainerItemCreate>
      <ContainerItemCreate>
        <Select
          title="Должность"
          placeholder="Должность врача"
          listItems={DoctorsPosition}
          onChange={setPosition}
        />
      </ContainerItemCreate>
      <ContainerToBottom>
        {showAlert && (
          <View>
            <Text>Заполните все поля</Text>
          </View>
        )}
        <Button
          onPress={onPressButton}
          color={ColorScheme.BRIGHT_ORANGE}
          title={TitleButton.CREATE_CARD}
        />
      </ContainerToBottom>
    </Container>
  );
};

export default Create;

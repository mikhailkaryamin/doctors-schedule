import React from "react";

import { Screen, ColorScheme, IconName, TitleButton } from "../shared/consts";
import { PropsMain } from "../shared/types";

import Container from "../components/Container";
import ContainerToBottom from "../components/ContainerToBottom";
import ContainerButton from "../components/ContainerButton";
import DoctorsList from "../components/DoctorsList";
import Button from "../components/Button";

const Main = ({ navigation }: PropsMain) => {
  const goCreateScreen = () => {
    navigation.navigate(Screen.CREATE);
  };

  return (
    <Container>
      <DoctorsList />
      <ContainerToBottom>
        <ContainerButton>
          <Button
            onPress={goCreateScreen}
            color={ColorScheme.BRIGHT_ORANGE}
            iconName={IconName.PLUS}
            title={TitleButton.ADD_DOCTOR}
          />
        </ContainerButton>
      </ContainerToBottom>
    </Container>
  );
};

export default Main;

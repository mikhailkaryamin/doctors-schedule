import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ColorScheme, Screen } from "../shared/consts";
import { StackParamList } from "../shared/types";
import LinkingConfiguration from "./LinkingConfiguration";

import Main from "../screens/Main";
import Create from "../screens/Create";

const ScreenTitle = {
  MAIN: "НАШИ ВРАЧИ",
  EMPTY: "",
};

const Stack = createStackNavigator<StackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Screen.MAIN}>
      <Stack.Screen
        name={Screen.MAIN}
        component={Main}
        options={{
          title: ScreenTitle.MAIN,
          headerTintColor: ColorScheme.DARK_CHARCOAL,
          headerTitleAlign: "center",
          headerStyle: {
            elevation: 0,
            shadowColor: "transparent",
          },
        }}
      />
      <Stack.Screen
        name={Screen.CREATE}
        component={Create}
        options={{
          title: ScreenTitle.EMPTY,
          headerTitleAlign: "center",
          headerTintColor: ColorScheme.BRIGHT_ORANGE,
          headerStyle: {
            elevation: 0,
            shadowColor: "transparent",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigation;

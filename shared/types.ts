
import { StackNavigationProp } from "@react-navigation/stack";
import { IconName, TitleButton, ColorScheme, DoctorsPosition } from "./consts";

type IconNameType = typeof IconName[keyof typeof IconName];
type TitleButtonType = typeof TitleButton[keyof typeof TitleButton];
type ColorType = typeof ColorScheme[keyof typeof ColorScheme];
type Id = {
  id: string;
}
type DoctorsPositionType = typeof DoctorsPosition[keyof typeof DoctorsPosition];

// Component
type children = React.ReactNode;

export type PropsContainer = {
  children: children;
}

export type PropsButton = {
  iconName?: IconNameType;
  onPress: () => void;
  color: ColorType;
  title: TitleButtonType;
}

export type PropsInput = {
  onChange: React.Dispatch<any>;
  placeholder: string;
  title: string;
}

export type PropsSelect = {
  onChange: React.Dispatch<any>;
  placeholder: string;
  title: string;
  listItems: Record<string, string>,
}

export type PropsCard = {
  firstName: string;
  middleName: string;
  lastName: string;
  position: DoctorsPositionType;
  uriImg: string;
}

export type RenderItem = {
  item: PropsCard & Id;
}

export type PropsImagePicker = {
  onChange: React.Dispatch<any>;
}

// Navigation
export type StackParamList = {
  Main: undefined;
  Create: undefined;
}

export type MainScreenNavigationProp = StackNavigationProp<
  StackParamList,
  "Create"
>;

export type CreateScreenNavigationProp = StackNavigationProp<
  StackParamList,
  "Main"
>;

// Screen
export type PropsMain = {
  navigation: MainScreenNavigationProp;
}

export type PropsCreate = {
  navigation: MainScreenNavigationProp;
}

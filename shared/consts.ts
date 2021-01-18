const Screen = {
  MAIN: "Main",
  CREATE: "Create"
} as const;

const ColorScheme = {
  DARK_CHARCOAL: "#333333",
  GAINSBORO: "#DFDFDF",
  BRIGHT_ORANGE: "#F36E20",
  WHITE: "#FFFFFF",
  CYAN_BLUE: "#0B54A6",
  TITAN_WHITE: "#D9D5DC",
  MATTERHORN: "#575757",
  LITE_SLATE_GRAY: "#7D8490",
  RED: "#f54242",
};

const IconName = {
  PLUS: "PLUS",
} as const;

const IconForButton = {
  [IconName.PLUS]: require("../assets/images/icon-plus.png"),
} as const;

const TitleButton = {
  ADD_DOCTOR: "ДОБАВИТЬ ВРАЧА",
  ADD_PHOTO: "ДОБАВИТЬ ФОТОГРАФИЮ",
  CREATE_CARD: "ДОБАВИТЬ",
} as const;

const DoctorsPosition = {
  THERAPIST: "Терапевт",
  OPHTHALMOLOGIST: "Врач-офтальмолог",
  OTOLARYNGOLOGIST: "Отоларинголог",
  NEUROLOGIST: "Невролог",
} as const;

const StorageKey = "@doctors-list";

export {
  ColorScheme,
  IconName,
  IconForButton,
  Screen,
  TitleButton,
  DoctorsPosition,
  StorageKey
};

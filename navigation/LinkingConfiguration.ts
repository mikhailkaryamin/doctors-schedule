import * as Linking from "expo-linking";
import { Screen } from "../shared/consts";

const config = {
  screens: {
    [Screen.MAIN]: "main",
    [Screen.CREATE]: "create"
  },
};

export default {
  prefixes: [Linking.makeUrl("/")],
  config,
};

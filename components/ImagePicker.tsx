import React, { useState, useEffect } from "react";
import { Text, View, Platform, Image, Pressable, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { TitleButton, ColorScheme } from "../shared/consts";
import { PropsImagePicker } from "../shared/types";

import Button from "./Button";

const ImagePickerExample = ({ onChange }: PropsImagePicker) => {
  const [image, setImage] = useState(null);

  const formatNamePhoto = (str: string) => {
    let indexSlashSymbol = str.lastIndexOf("/");

    if (indexSlashSymbol === -1) {
      indexSlashSymbol = 0;
    } else {
      indexSlashSymbol += 1;
    }

    return str.slice(indexSlashSymbol);
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [2, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      onChange(result.uri);
    }
  };

  return (
    <View>
      <Button title={TitleButton.ADD_PHOTO} onPress={pickImage} color={ColorScheme.CYAN_BLUE}/>
      {image && (
        <View style={styles.containerString}>
          <Text style={styles.name}>
            {formatNamePhoto(image)}
          </Text>
          <Pressable style={styles.icon}>
            <Image source={require("../assets/images/icon-close.png")} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerString: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingRight: 32,
    paddingBottom: 20,
  },
  name: {
    fontSize: 16,
    lineHeight: 22,
    color: ColorScheme.LITE_SLATE_GRAY
  },
  icon: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default ImagePickerExample;

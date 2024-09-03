import { Text, Pressable, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";

const ButtonSelect = ({
  handleButtonPress,
  content,
  image,
}: {
  handleButtonPress: () => void;
  content: string;
  image: number;
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleButtonPress}>
      <Image source={image} style={styles.image} />
      <Text style={[stylesTextPuplic.text12bold, { color: colorPuplic.white }]}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: "white",
    borderRadius: 100,
  },
  container: {
    flexDirection: "column",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#71A162",
    gap: 6,
    width: 90,
    height: 90,
  },
});

export default ButtonSelect;

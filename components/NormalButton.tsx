import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";

const NormalButton = ({
  content,
  onPress,
  backgroundColor,
  textColor,
}: {
  content: string;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: backgroundColor }]}
    >
      <Text
        style={[
          stylesTextPuplic.text16bold,
          styles.styleTextNormal,
          { color: textColor },
        ]}
      >
        {content}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 140,
    height: 44,
    borderRadius: 24,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colorPuplic.RED,
  },
  styleTextNormal: {
    color: colorPuplic.white,
    textAlign: "center",
  },
});

export default NormalButton;

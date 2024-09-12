import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colorLinearPublic, colorPuplic } from "@/constant/stylesPuplic";

const ButtonStrokeLinear = ({
  content,
  onPress,
  textSize,
  paddingButton,
  isLeft,
}: {
  content: string;
  onPress: () => void;
  textSize: {};
  paddingButton?: number;
  isLeft?: boolean;
}) => {
  return (
    <LinearGradient
      colors={colorLinearPublic.goldLinear.colors}
      locations={colorLinearPublic.goldLinear.locations}
      style={[
        styles.container,
        {
          alignSelf: isLeft ? "flex-start" : "center",
        },
      ]}
      start={{ x: 1, y: 0.1 }}
      end={{ x: 0.4, y: 0 }}
    >
      <Pressable
        style={[styles.button, { paddingHorizontal: paddingButton || 30 }]}
        onPress={onPress}
      >
        <Text style={[textSize, styles.styleText]}>{content}</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  styleText: {
    color: colorPuplic.white,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    zIndex: 2,
  },
  container: {
    borderRadius: 30,
    padding: 2,
    shadowColor: "rgba(71, 2, 2, 1)",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    elevation: 3,
    shadowOpacity: 0.3,
    maxHeight: 55
  },
  button: {
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B70002",
    flex: 1,
    paddingVertical: 10,
  },
});
export default ButtonStrokeLinear;

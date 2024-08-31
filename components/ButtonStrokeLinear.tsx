import { View, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";

const ButtonStrokeLinear = ({
  content,
  onPress,
}: {
  content: string;
  onPress: () => void;
}) => {
  return (
    <View style={styles.containerView}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={[stylesTextPuplic.text20bold, styles.styleText]}>
          {content}
        </Text>
      </Pressable>
      <LinearGradient
        colors={colorLinearPublic.goldLinear.colors}
        locations={colorLinearPublic.goldLinear.locations}
        style={styles.container}
        start={{ x: 1, y: 0.1 }}
        end={{ x: 0.4, y: 0 }}
      >
        <Text style={[stylesTextPuplic.text20bold, styles.styleText]}>
          {content}
        </Text>
      </LinearGradient>
    </View>
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
  containerView: {
    height: 50,
    position: "relative",
  },
  container: {
    borderRadius: 30,
    height: 46,
    position: "absolute",
    top: 0,
    zIndex: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 30,
    shadowColor: "rgba(71, 2, 2, 1)",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    elevation: 3,
    shadowOpacity: 0.3,
  },
  button: {
    borderRadius: 28,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B70002",
    alignSelf: "center",
    paddingHorizontal: 28,
    top: 2,
    zIndex: 1,
  },
});
export default ButtonStrokeLinear;

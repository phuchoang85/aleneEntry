import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";

const CardSale = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerWhite}>
        <Text
          style={[
            stylesTextPuplic.text10bold,
            { color: "#73A442", alignItems: "center" },
          ]}
        >
          MÃ GIẢM GIÁ
        </Text>
        <Text
          style={[
            stylesTextPuplic.text16bold,
            { color: colorPuplic.green2, alignItems: "center" },
          ]}
        >
          ANLEANMUMW88
        </Text>
      </View>
      <View style={styles.containerGreen}>
        <Text
          style={[
            stylesTextPuplic.text15bold,
            { color: colorPuplic.yellow, alignItems: "center" },
          ]}
        >
          ÁP DỤNG TẠI
        </Text>
        <Image source={require("@images/logo_lazada.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colorPuplic.white,
    alignSelf: "center",
    position:'absolute',
    top: -20,
    zIndex: 3
  },
  containerWhite: {
    backgroundColor: colorPuplic.white,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 8,
  },
  containerGreen: {
    backgroundColor: "transparent",
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 12,
  },
});

export default CardSale;

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";

const CardSale = () => {
  const { width: MAX_WIDTH } = useWindowDimensions();
  const styles = StyleSheet.create({
    container: {
      borderRadius: 6,
      borderWidth: 1,
      borderColor: colorPuplic.white,
      position: "absolute",
      top: MAX_WIDTH >= 1024 ? -170 : -20,
      left: MAX_WIDTH >= 1024 ? 48 : undefined,
      zIndex: 3,
    },
    containerWhite: {
      backgroundColor: colorPuplic.white,
      paddingHorizontal: MAX_WIDTH >= 1024 ? 29 : 24,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 10,
      paddingBottom: 8,
    },
    containerGreen: {
      backgroundColor: "transparent",
      flexDirection: "row",
      gap: 12,
      paddingHorizontal: MAX_WIDTH >= 1024 ? 26 : 18,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 15,
      paddingBottom: 12,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.containerWhite}>
        <Text
          style={[
            MAX_WIDTH >= 1024
              ? stylesTextPuplic.text16bold
              : stylesTextPuplic.text10bold,
            { color: "#73A442", alignItems: "center" },
          ]}
        >
          MÃ GIẢM GIÁ
        </Text>
        <Text
          style={[
            MAX_WIDTH >= 1024
              ? stylesTextPuplic.text24bold
              : stylesTextPuplic.text16bold,
            { color: colorPuplic.green2, alignItems: "center" },
          ]}
        >
          ANLEANMUMW88
        </Text>
      </View>
      <View style={styles.containerGreen}>
        <Text
          style={[
            MAX_WIDTH >= 1024
              ? stylesTextPuplic.text20bold
              : stylesTextPuplic.text15bold,
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

export default CardSale;

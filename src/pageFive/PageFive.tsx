import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { colorPuplic } from "@/constant/stylesPuplic";
import ComponentTop from "./components/ComponentTop";
import ComponentBottom from "./components/ComponentBottom";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "@/app";
import HeaderPage from "@/components/HeaderPage";

const PageFive = () => {
  const { width: MAX_WIDTH, height: MAX_HEIGHT } = useWindowDimensions();
  const styles = StyleSheet.create({
    image: {
      alignSelf: "center",
      width: 132,
      height: 36,
    },
    styleImage: {
      width: "100%",
      height: MAX_WIDTH >= 1024 ? "100%" : MAX_HEIGHT,
      position: "absolute",
      top: 0,
      zIndex: -1,
      alignSelf: "center",
      left: MAX_WIDTH >= 1024 ? 320 : 0,
    },
    container: {
      flex: 1,
    },
    containerScrollView: {
      flex: 1,
      backgroundColor: colorPuplic.greenWeak,
      position: "relative",
    },
    containerHeaderBigScreen: {
      position: "absolute",
      top: 45,
      width: "100%",
      zIndex: 2,
    },
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const goToWeb = () => {
    Linking.openURL(
      "https://www.lazada.vn/shop/fonterra-official-store?tab=promotion&path=promotion-30470-0.html"
    ).catch((err) => console.error("An error occurred", err));
  };

  const goToScreen = () => {
    navigation.navigate("PageSix");
  };
  const goHome = () => {
    navigation.navigate("Welcome");
  };

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerScrollView}
      >
        {MAX_WIDTH >= 1024 && (
          <View style={styles.containerHeaderBigScreen}>
            <HeaderPage
              acctionLeft={goBack}
              imageLeft={require("@images/arrow_back.png")}
              imageRight={require("@images/home.png")}
              numberPage="5"
              acctionRight={goHome}
            />

            <Image source={require("@images/logo.png")} style={styles.image} />
          </View>
        )}
        <ComponentTop goHome={goHome} goBack={goBack} />
        {MAX_WIDTH < 1024 && (
          <Image
            source={require("@images/anlene_cofee.png")}
            style={styles.styleImage}
          />
        )}

        <ComponentBottom goToScreen={goToScreen} goToWeb={goToWeb} />
        {MAX_WIDTH >= 1024 && (
          <Image
            source={require("@images/first_pic_big.png")}
            style={styles.styleImage}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default PageFive;

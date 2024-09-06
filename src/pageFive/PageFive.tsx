import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { colorPuplic } from "@/constant/stylesPuplic";
import ComponentTop from "./components/ComponentTop";
import ComponentBottom from "./components/ComponentBottom";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "@/app";

const PageFive = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const goToScreen = () => {
    navigation.navigate("Welcome");
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScrollView}>
        <ImageBackground
          source={require("@images/anlene_cofee.png")}
          resizeMode="cover"
          style={styles.styleImage}
        >
          <ComponentTop />

        </ImageBackground>

        <ComponentBottom goToScreen={goToScreen} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  styleImage: {
    flex: 1,
   paddingBottom: 350,
   marginBottom: 210
  },
  container: {
    flex: 1,
  },
  containerScrollView: {
    flex: 1,
    backgroundColor: colorPuplic.greenWeak,
    position:'relative'
  },
});

export default PageFive;

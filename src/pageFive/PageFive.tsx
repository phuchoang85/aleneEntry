import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  Linking,
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
  const goToWeb = () => {
    Linking.openURL("https://www.lazada.vn/shop/fonterra-official-store?tab=promotion&path=promotion-30470-0.html")
    .catch(err => console.error('An error occurred', err));
  };

  const goToScreen = () => {
    navigation.navigate("PageSix");
  };
  const goHome = () =>{
    navigation.navigate("Welcome");
  }

  const goBack = () =>{
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScrollView}>
        {/* <ImageBackground
          source={require("@images/anlene_cofee.png")}
          resizeMode="cover"
          style={styles.styleImage} */}

          <ComponentTop goHome={goHome} goBack={goBack} />
        {/* </ImageBackground> */}
        <Image
          source={require("@images/anlene_cofee.png")}
          style={styles.styleImage}
        />
        <ComponentBottom goToScreen={goToScreen} goToWeb={goToWeb}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  styleImage: {
    flex: 1,
    position:'absolute',
    top: 0,
    zIndex: -1,
    alignSelf:'center'
  },
  container: {
    flex: 1,
  },
  containerScrollView: {
    flex: 1,
    backgroundColor: colorPuplic.greenWeak,
    position: "relative",
    paddingTop: 45,
  },
});

export default PageFive;

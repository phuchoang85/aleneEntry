import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";
import ComponentTop from "./components/ComponentTop";
import ComponentBottom from "./components/ComponentBottom";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "@/app";
import { useWelcome } from "./hooks/useWelcome";
import HeaderPage from "@/components/HeaderPage";

export default function Welcome() {
  const { width: MAX_WIDTH, height: MAX_HEIGHT } = useWindowDimensions();
  const { data, loading } = useWelcome();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const goToScreen = () => {
    navigation.navigate("Test");
  };

  if (loading) {
    return (
      <View>
        <Text>Loading..........</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    containerHeaderBigScreen: {
      position: "absolute",
      top: 20,
      width: "100%",
      paddingHorizontal: 36,
      zIndex: 2,
    },
    container: {
      flex: 1,
      position: "relative",
    },
    containerScrollView: {
      flex: 1,
      backgroundColor: "#13500E",
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
  });

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerScrollView}
      >
        {MAX_WIDTH >= 1024 && (
          <View style={styles.containerHeaderBigScreen}>
            <HeaderPage
              numberPage="1"
              imageRight={require("@images/logo_welcome.png")}
            />
          </View>
        )}
        <ComponentTop />
        {MAX_WIDTH < 1024 && (
          <Image
            source={require("@images/first_pic.png")}
            style={styles.styleImage}
          />
        )}
        <ComponentBottom goToScreen={goToScreen} />
        {MAX_WIDTH >= 1024 && (
          <Image
            source={require("@images/first_pic_big.png")}
            style={styles.styleImage}
          />
        )}
      </ScrollView>
    </View>
  );
}

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
} from "react-native";
import React from "react";
import ComponentTop from "./components/ComponentTop";
import ComponentBottom from "./components/ComponentBottom";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "@/app";
import { useWelcome } from "./hooks/useWelcome";
export default function Welcome() {
  const { data, loading } = useWelcome();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const goToScreen = () => {
    navigation.navigate("Test");
  };

  if (data.length === 0 || loading) {
    return (
      <View>
        <Text>Loading..........</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScrollView}>
        <ImageBackground
          source={require("@images/first_pic.png")}
          resizeMode="cover"
          style={styles.styleImage}
        >
          <ComponentTop />
        </ImageBackground>
        <ComponentBottom goToScreen={goToScreen} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  styleImage: {
    flex: 1,
    paddingBottom: 300,
  },
  container: {
    flex: 1,
  },
  containerScrollView: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#13500E',
  },
});

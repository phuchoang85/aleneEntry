import { View, StyleSheet, Image, ScrollView, Text } from "react-native";
import React from "react";
import { colorPuplic } from "@/constant/stylesPuplic";
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
        <ComponentTop />

        <Image
          source={require("@images/first_pic.png")}
          style={styles.styleImage}
        />

        <ComponentBottom goToScreen={goToScreen} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  styleImage: {
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: -1,
  },
  container: {
    flex: 1,
  },
  containerScrollView: {
    flex: 1,
    backgroundColor: colorPuplic.white,
    paddingBottom: 100,
  },
});

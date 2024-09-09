import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
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

  if (loading) {
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
    flex: 1,
    position:'absolute',
    top: 0,
    zIndex: -1,
    alignSelf:'center'
  },
  container: {
    flex: 1,
    position:'relative'
  },
  containerScrollView: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: "#13500E",
  },
});

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import BoxBorder from "./components/BoxBorder";
import HeaderPage from "@/components/HeaderPage";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "@/app";
import BackgroundPage from "@/components/BackgroundPage";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";

const PageDetail = () => {
  const { width: MAX_WIDTH } = useWindowDimensions();
  const styles = StyleSheet.create({
    textYellow: {
      color: colorPuplic.yellow,
      textAlign: "center",
    },
    container: {
      flex: 1,
    },
    containerScrollView: {
      flex: 1,
      paddingTop: MAX_WIDTH >= 1024 ? 45 : 25,
    },
    image: {
      alignSelf: "center",
      width: MAX_WIDTH >= 1024 ? 132 : 98,
      height: MAX_WIDTH >= 1024 ? 36 : 27,
      marginBottom: 16,
    },
    bigImage: {
      width: MAX_WIDTH >= 1024 ? 489 : null,
      height: MAX_WIDTH >= 1024 ? 300 : null,
      marginVertical: 16,
      alignSelf: "center",
    },
    textWhite: {
      color: "white",
      textAlign: "center",
      paddingHorizontal: 24,
      marginBottom: 28,
      maxWidth: MAX_WIDTH >= 1024 ? 500 : null,
      alignSelf: "center",
    },
    containerThreeBox: {
      flexDirection: MAX_WIDTH >= 1024 ? "row" : "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      width: "100%",
      marginBottom: 50,
    },
  });
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const goBack = () => {
    navigation.goBack();
  };

  const goHome = () => {
    navigation.navigate("Welcome");
  };
  return (
    <BackgroundPage colors={colorLinearPublic.linear} styles={styles.container}>
      <ScrollView style={styles.containerScrollView}>
        <HeaderPage
          acctionLeft={goBack}
          imageLeft={require("@images/arrow_back.png")}
          imageRight={require("@images/home.png")}
          numberPage="6"
          acctionRight={goHome}
        />

        <Image source={require("@images/logo.png")} style={styles.image} />

        <Text
          style={[
            MAX_WIDTH >= 1024
              ? stylesTextPuplic.text28bold
              : stylesTextPuplic.text24bold,
            styles.textYellow,
          ]}
        >
          THÔNG TIN SẢN PHẨM
        </Text>

        <Text
          style={[
            MAX_WIDTH >= 1024
              ? stylesTextPuplic.text18bold
              : stylesTextPuplic.text18bold,
            styles.textYellow,
          ]}
        >
          SỮA ANLENE 3 KHỎE
        </Text>

        <Image
          style={styles.bigImage}
          source={require("@images/anlene_two.png")}
        />

        <Text style={[stylesTextPuplic.text14regular, styles.textWhite]}>
          Uống 2 ly Anlene mỗi ngày để bổ sung dinh dưỡng, tăng cường đề kháng
          đồng thời duy trì thói quen tập thể dục mỗi ngày để giúp hệ
          Cơ-Xương-Khớp chắc khoẻ, thoải mái tận hưởng cuộc sống năng động,
          chẳng ngại “rào cản” tuổi tác.
        </Text>

        <View style={styles.containerThreeBox}>
          <BoxBorder>
            <Image
              source={require("@images/image_page_six1.png")}
              style={{ flex: 1 }}
            />
          </BoxBorder>
          <BoxBorder>
            <Image
              source={require("@images/image_page_six2.png")}
              style={{ flex: 1 }}
            />
          </BoxBorder>
          <BoxBorder>
            <Image
              source={require("@images/image_page_six3.png")}
              style={{ flex: 1 }}
            />
          </BoxBorder>
        </View>
      </ScrollView>
    </BackgroundPage>
  );
};

export default PageDetail;

import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import React from "react";
import { initial } from "@/constant/type";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";
import StatusTest from "./StatusTest";
import LinearTextStyle from "@/components/LinearTextStyle";
const { width: MAX_WIDTH, height: MAX_HEIGHT } = Dimensions.get("screen");
const ContentTop = ({ resultQ }: { resultQ: initial }) => {
  return (
    <>
      {MAX_WIDTH >= 1024 ? (
        <>
          <Image source={require("@images/logo.png")} style={styles.imgLogo} />
          <LinearTextStyle
            colors={colorLinearPublic.linearYellowhao}
            styles={[stylesTextPuplic.text28bold, styles.containerText]}
          >
            4 BƯỚC ĐƠN GIẢN
          </LinearTextStyle>
          <LinearTextStyle
            colors={colorLinearPublic.linearYellowhao}
            styles={[stylesTextPuplic.text24bold, styles.containerText]}
          >
            ĐỂ KIỂM TRA CƠ-XƯƠNG-KHỚP
          </LinearTextStyle>

          <Text style={[stylesTextPuplic.text18regular, styles.textWhite]}>
            Bạn có dễ dàng thực hiện các động tác dưới đây không?
          </Text>
        </>
      ) : (
        <>
          <Text style={[stylesTextPuplic.text16bold, styles.styleTextNormal]}>
            KIỂM TRA CƠ - XƯƠNG - KHỚP
          </Text>

          <StatusTest resultQ={resultQ} />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  styleTextNormal: {
    color: colorPuplic.white,
    textAlign: "center",
  },
  imgLogo: {
    width: 132,
    height: 36,
    alignSelf: "center",
    marginBottom: 8
  },
  containerText: {
    alignSelf: "center",
    height: 36,
    color: colorPuplic.yellow,
  },
  textWhite: {
    color: "white",
    textAlign: "center",
    marginBottom: 16,
  },
});

export default ContentTop;

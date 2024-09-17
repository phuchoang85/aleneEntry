import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";
import BoxLinear from "@/components/BoxLinear";
import HeaderPage from "@/components/HeaderPage";
import LinearTextStyle from "@/components/LinearTextStyle";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";

const ComponentTop = ({
  goBack,
  goHome,
}: {
  goBack: () => void;
  goHome: () => void;
}) => {
  const { width: MAX_WIDTH } = useWindowDimensions();
  const styles = StyleSheet.create({
    image: {
      alignSelf: "center",
      width: 98,
      height: 27,
      marginBottom: 16,
    },
    styleboxTop: {
      width: MAX_WIDTH >= 1024 ? "62%" : "100%",
      paddingBottom: MAX_WIDTH >= 1024 ? 200 : 20,
      paddingTop: MAX_WIDTH >= 1024 ? 125 : 25,
      paddingHorizontal: MAX_WIDTH >= 1024 ? 48 : 18,
    },
    containerSmallText: {
      textAlign: MAX_WIDTH >= 1024 ? "left" : "center",
      height: 34,
      color: colorPuplic.yellow,
    },
    containerText: {
      textAlign: MAX_WIDTH >= 1024 ? "left" : "center",
      height: 34,
      color: colorPuplic.yellow,
    },
    textWhite: {
      color: colorPuplic.white,
      marginTop: 13
    },
  });
  return (
    <BoxLinear
      colors={colorLinearPublic.mauKV2}
      styles={styles.styleboxTop}
      start={{ x: MAX_WIDTH >= 1024 ? 1 : 0.5, y: MAX_WIDTH >= 1024 ? 0 : 1 }}
      end={{ x: MAX_WIDTH >= 1024 ? 0 : 0.5, y: 0 }}
    >
      {MAX_WIDTH < 1024 && (
        <>
          <HeaderPage
            acctionLeft={goBack}
            imageLeft={require("@images/arrow_back.png")}
            imageRight={require("@images/home.png")}
            numberPage="5"
            acctionRight={goHome}
          />

          <Image source={require("@images/logo.png")} style={styles.image} />
        </>
      )}
      <LinearTextStyle
        colors={colorLinearPublic.linearYellowhao}
        styles={[
          MAX_WIDTH >= 1024
            ? stylesTextPuplic.text30bold
            : stylesTextPuplic.text20regular,
          styles.containerText,
        ]}
      >
        CHĂM SÓC CƠ-XƯƠNG-KHỚP
      </LinearTextStyle>
      <LinearTextStyle
        colors={colorLinearPublic.linearYellowhao}
        styles={[
          MAX_WIDTH >= 1024
            ? stylesTextPuplic.text24bold
            : stylesTextPuplic.text16regular,
          styles.containerSmallText,
        ]}
      >
        NHẬN LỘC SỨC KHỎE TỪ ANLENE
      </LinearTextStyle>

      <Text
        style={[
          MAX_WIDTH >= 1024
            ? stylesTextPuplic.text16bold
            : stylesTextPuplic.text12bold,
          styles.textWhite,
        ]}
      >
        ANLENE LÌ XÌ NGAY 100.000đ KHI ĐẶT MUA HÔM NAY!
      </Text>
      <Text
        style={[
          MAX_WIDTH >= 1024
            ? stylesTextPuplic.text16regular
            : stylesTextPuplic.text12reg,
          styles.textWhite,
        ]}
      >
        Hạn sử dụng 25/07/2021 - 31/07/2021
      </Text>
    </BoxLinear>
  );
};

export default ComponentTop;

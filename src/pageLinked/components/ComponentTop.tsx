import { Text, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import BoxLinear from "@/components/BoxLinear";
import LinearTextStyle from "@/components/LinearTextStyle";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";

const ComponentTop = () => {
  const { width: MAX_WIDTH } = useWindowDimensions();
  const styles = StyleSheet.create({
    styleboxTop: {
      width: MAX_WIDTH >= 1024 ? "62%" : "100%",
      paddingBottom: MAX_WIDTH >= 1024 ? 200 : 20,
      paddingTop: MAX_WIDTH >= 1024 ? 125 : 105,
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
      marginTop: 13,
    },
  });
  return (
    <BoxLinear
      colors={colorLinearPublic.mauKV2}
      styles={styles.styleboxTop}
      start={{ x: MAX_WIDTH >= 1024 ? 1 : 0.5, y: MAX_WIDTH >= 1024 ? 0 : 1 }}
      end={{ x: MAX_WIDTH >= 1024 ? 0 : 0.5, y: 0 }}
    >
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

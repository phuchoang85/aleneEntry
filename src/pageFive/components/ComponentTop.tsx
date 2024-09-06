import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import BoxLinear from "@/components/BoxLinear";
import HeaderPage from "@/components/HeaderPage";
import LinearTextStyle from "@/components/LinearTextStyle";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";

const ComponentTop = () => {
  return (
    <BoxLinear
      colors={colorLinearPublic.mauKV2}
      styles={styles.styleboxTop}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
    >
      <View style={{ paddingHorizontal: 24 }}>
        <HeaderPage
          acctionLeft={() => null}
          imageLeft={null}
          numberPage="5"
          acctionRight={() => null}
          imageRight={require("@images/logo.png")}
        />
      </View>

      <Image source={require("@images/logo.png")} style={styles.image} />
      <LinearTextStyle
        colors={colorLinearPublic.linearYellowhao}
        styles={[stylesTextPuplic.text20regular, styles.containerText]}
      >
        CHĂM SÓC CƠ-XƯƠNG-KHỚP
      </LinearTextStyle>
      <LinearTextStyle
        colors={colorLinearPublic.linearYellowhao}
        styles={[stylesTextPuplic.text16regular, styles.containerSmallText]}
      >
        NHẬN LỘC SỨC KHỎE TỪ ANLENE
      </LinearTextStyle>

      <Text
        style={[
          stylesTextPuplic.text12bold,
          styles.textWhite,
          { marginTop: 13 },
        ]}
      >
        ANLENE LÌ XÌ NGAY 100.000đ KHI ĐẶT MUA HÔM NAY!
      </Text>
      <Text style={[stylesTextPuplic.text12reg, styles.textWhite]}>
        Hạn sử dụng 25/07/2021 - 31/07/2021
      </Text>
    </BoxLinear>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    marginBottom: 16,
  },
  styleboxTop: {
    width: "100%",
    paddingBottom: 20,
  },
  containerSmallText: {
    textAlign: "center",
    height: 30,
  },
  containerText: {
    textAlign: "center",
    height: 30,
  },
  textWhite: {
    color: colorPuplic.white,
    paddingHorizontal: 18,
  },
});

export default ComponentTop;

import { View, Text, StyleSheet } from "react-native";
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
      colors={colorLinearPublic.mauKV}
      styles={styles.styleboxTop}
      start={{ x: 0.5, y: 1.7 }}
      end={{ x: 0.5, y: 0 }}
    >
      <View style={{ paddingHorizontal: 24 }}>
        <HeaderPage
          acctionLeft={() => null}
          imageLeft={null}
          numberPage="1"
          acctionRight={() => null}
          imageRight={require("@images/logo_welcome.png")}
        />
      </View>
      <LinearTextStyle
        colors={colorLinearPublic.linearYellowhao}
        styles={[stylesTextPuplic.text22regular, styles.containerText]}
      >
        TẾT BẬN RỘN {"\n"} CƠ-XƯƠNG-KHỚP CÓ KHỎE {"\n"} ĐỂ CHU TOÀN?
      </LinearTextStyle>
      <Text style={[stylesTextPuplic.text12reg, styles.containerSmallText]}>
        Trăm công nghìn việc dịp cận Tết mà cơ thể nhức mỏi, làm sao chu toàn?
      </Text>

      <Text style={[stylesTextPuplic.text12reg, styles.containerSmallText]}>
        Ngay lúc này, hãy{" "}
        <Text style={{ color: colorPuplic.text }}>
          Kiểm tra Sức khỏe Cơ-Xương-Khớp{`\n`}
        </Text>
        cùng Anlene để Tết này cả nhà vui khỏe đón Tết,{`\n`} trọn vẹn niềm vui.
      </Text>
    </BoxLinear>
  );
};

const styles = StyleSheet.create({
  styleboxTop: {
    width: "100%",
    paddingBottom: 20,
  },
  containerSmallText: {
    paddingHorizontal: 18,
    textAlign: "center",
    color: colorPuplic.white,
  },
  containerText: {
    paddingHorizontal: 28,
    textAlign: "center",
    height: 100,
  },
});

export default ComponentTop;

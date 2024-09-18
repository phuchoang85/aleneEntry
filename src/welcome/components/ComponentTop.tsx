import {
  View,
  Text,
  StyleSheet,
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

const ComponentTop = () => {
  const { width: MAX_WIDTH, height: MAX_HEIGHT } = useWindowDimensions();
  const styles = StyleSheet.create({
    styleboxTop: {
      width: MAX_WIDTH >= 1024 ? "62%" : "100%",
      paddingBottom: MAX_WIDTH >= 1024 ? 200 : 20,
      paddingTop: 55,
      paddingLeft: MAX_WIDTH >= 1024 ? 48 : 0,
    },
    containerSmallText: {
      paddingHorizontal: MAX_WIDTH >= 1024 ? 0 : 18,
      textAlign: MAX_WIDTH >= 1024 ? "left" : "center",
      color: colorPuplic.white,
    },
    containerText: {
      paddingHorizontal: MAX_WIDTH >= 1024 ? 0 : 28,
      textAlign: MAX_WIDTH >= 1024 ? "left" : "center",
      height: MAX_WIDTH >= 1024 ? 130 : 100,
      color: colorPuplic.yellow,
    },
  });

  return (
    <BoxLinear
      colors={
        MAX_WIDTH >= 1024 ? colorLinearPublic.mauKVBig : colorLinearPublic.mauKV
      }
      styles={styles.styleboxTop}
      start={{ x:MAX_WIDTH >= 1024 ? 1 : 0.5, y: MAX_WIDTH >= 1024 ? 0 : 1.7 }}
      end={{ x: MAX_WIDTH >= 1024 ? 0 : 0.5, y: 0 }}
    >
      <LinearTextStyle
        colors={colorLinearPublic.linearYellowhao}
        styles={[
          MAX_WIDTH >= 1024
            ? stylesTextPuplic.text30bold
            : stylesTextPuplic.text22regular,
          styles.containerText,
        ]}
      >
        TẾT BẬN RỘN {"\n"}CƠ-XƯƠNG-KHỚP CÓ KHỎE {"\n"}ĐỂ CHU TOÀN?
      </LinearTextStyle>
      <Text
        style={[
          MAX_WIDTH >= 1024
            ? stylesTextPuplic.text16regular
            : stylesTextPuplic.text12reg,
          styles.containerSmallText,
        ]}
      >
        Trăm công nghìn việc dịp cận Tết mà cơ thể nhức mỏi, làm sao chu toàn?
      </Text>

      <Text
        style={[
          MAX_WIDTH >= 1024
            ? stylesTextPuplic.text16regular
            : stylesTextPuplic.text12reg,
          styles.containerSmallText,
        ]}
      >
        Ngay lúc này, hãy{" "}
        <Text style={{ color: colorPuplic.text }}>
          Kiểm tra Sức khỏe Cơ-Xương-Khớp{`\n`}
        </Text>
        cùng Anlene để Tết này cả nhà vui khỏe đón Tết,{`\n`}trọn vẹn niềm vui.
      </Text>
    </BoxLinear>
  );
};

export default ComponentTop;

import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import BoxLinear from "@/components/BoxLinear";
import ButtonStrokeLinear from "@/components/ButtonStrokeLinear";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";
const { width: MAX_WIDTH, height: MAX_HEIGHT } = Dimensions.get("screen");
const ComponentBottom = ({ goToScreen }: { goToScreen: () => void }) => {
  const resposiveTextBottom = () => {
    if (MAX_WIDTH >= 1024) {
      return styles.absoulteText;
    }

    return null;
  };
  return (
    <BoxLinear
      colors={
        MAX_WIDTH >= 1024 ? colorLinearPublic.mauKVBig : colorLinearPublic.mauKV
      }
      styles={styles.containerBottom}
      start={{ x: 0.5, y: 0 }}
      end={{ x: MAX_WIDTH >= 1024 ? 0 : 0.5, y: MAX_WIDTH >= 1024 ? 0 : 0.1 }}
    >
      <View style={styles.buttonRed}>
        <ButtonStrokeLinear
          textSize={
            MAX_WIDTH >= 1024
              ? stylesTextPuplic.text28bold
              : stylesTextPuplic.text20bold
          }
          isLeft={MAX_WIDTH >= 1024}
          paddingButton={MAX_WIDTH >= 1024 ? 40 : 30}
          content="KIỂM TRA NGAY"
          onPress={goToScreen}
        />
      </View>
      <View style={styles.containerThreeButton}>
        <Image
          source={require("@images/free.png")}
          style={styles.styleImageThreeButton}
        />
        <Image
          source={require("@images/minutes.png")}
          style={styles.styleImageThreeButton}
        />
        <Image
          source={require("@images/voucher.png")}
          style={styles.styleImageThreeButton}
        />
      </View>

      <Text
        style={[
          MAX_WIDTH >= 1024
            ? stylesTextPuplic.text13book
            : stylesTextPuplic.text12italic,
          styles.containerSmallText,
        ]}
      >
        Bài kiểm tra Cơ, Xương, Khớp này được phát triển bởi đội ngũ Anlene
      </Text>

      <Text
        style={[
          stylesTextPuplic.text12italic,
          styles.continerTextMorePadding,
          resposiveTextBottom(),
        ]}
      >
        Lưu ý: Bài kiểm tra không dành cho đối tượng đang bị chấn thương hoặc có
        bệnh lý về cơ, xương, khớp hoặc bệnh tiểu đường
      </Text>

      {MAX_WIDTH >= 1024 && (
        <Text
          style={[
            stylesTextPuplic.text12italic,
            styles.continerTextMorePadding,
          ]}
        ></Text>
      )}
    </BoxLinear>
  );
};

const styles = StyleSheet.create({
  containerBottom: {
    paddingTop: 30,
    backgroundColor: MAX_WIDTH >= 1024 ? undefined : colorPuplic.white,
    marginTop: MAX_WIDTH >= 1024 ? 0 : MAX_HEIGHT - 340,
    width: MAX_WIDTH >= 1024 ? "62%" : "100%",
    alignItems: MAX_WIDTH >= 1024 ? "flex-start" : "center",
  },
  buttonRed: {
    position: "absolute",
    width: MAX_WIDTH >= 1024 ? "50%" : "100%",
    top: -30,
    left: MAX_WIDTH >= 1024 ? 48 : null,
  },
  containerThreeButton: {
    gap: MAX_WIDTH >= 1024 ? 15 : 11,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: MAX_WIDTH >= 1024 ? 45 : 48,
    marginBottom: 8,
    marginTop: 24,
  },
  styleImageThreeButton: {
    width: MAX_WIDTH >= 1024 ? 110 : 85,
    height: MAX_WIDTH >= 1024 ? 79 : 57,
  },
  containerSmallText: {
    paddingHorizontal: MAX_WIDTH >= 1024 ? 48 : 18,
    textAlign: "center",
    color: colorPuplic.white,
  },
  continerTextMorePadding: {
    padding: 24,
    textAlign: "center",
    marginTop: 20,
    color: MAX_WIDTH >= 1024 ? colorPuplic.black1 : colorPuplic.white,
  },
  absoulteText: {
    position: "absolute",
    width: "100%",
    left: "38%",
    bottom: 10,
  },
});

export default ComponentBottom;

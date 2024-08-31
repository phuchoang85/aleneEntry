import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import BoxLinear from "@/components/BoxLinear";
import ButtonStrokeLinear from "@/components/ButtonStrokeLinear";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";

const ComponentBottom = ({ goToScreen }: { goToScreen: () => void }) => {
  return (
    <BoxLinear styles={styles.containerBottom} direction={"top"}>
      <View style={styles.buttonRed}>
        <ButtonStrokeLinear content="KIỂM TRA NGAY" onPress={goToScreen} />
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

      <Text style={[stylesTextPuplic.text12italic, styles.containerSmallText]}>
        Bài kiểm tra Cơ, Xương, Khớp này được phát triển bởi đội ngũ Anlene
      </Text>

      <Text
        style={[stylesTextPuplic.text12italic, styles.continerTextMorePadding]}
      >
        Lưu ý: Bài kiểm tra không dành cho đối tượng đang bị chấn thương hoặc có
        bệnh lý về cơ, xương, khớp hoặc bệnh tiểu đường
      </Text>
    </BoxLinear>
  );
};

const styles = StyleSheet.create({
  containerBottom: {
    height: "100%",
    marginTop: 380,
    paddingTop: 30,
  },
  buttonRed: {
    position: "absolute",
    width: "100%",
    top: -30,
  },
  containerThreeButton: {
    gap: 11,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 48,
    marginBottom: 8,
  },
  styleImageThreeButton: {
    width: 85,
    height: 57,
  },
  containerSmallText: {
    paddingHorizontal: 18,
    textAlign: "center",
    color: colorPuplic.white,
  },
  continerTextMorePadding: {
    padding: 24,
    textAlign: "center",
    marginTop: 20,
    color: colorPuplic.white,
  },
});

export default ComponentBottom;

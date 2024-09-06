import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import BoxLinear from "@/components/BoxLinear";
import ButtonStrokeLinear from "@/components/ButtonStrokeLinear";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";
import CardSale from "./CardSale";
import NormalButton from "@/components/NormalButton";

const ComponentBottom = ({ goToScreen }: { goToScreen: () => void }) => {
  return (
    <BoxLinear
      colors={colorLinearPublic.mauKV2}
      styles={styles.containerBottom}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 0.3 }}
    >
      <CardSale />

      <Pressable style={styles.button} onPress={goToScreen}>
        <Text style={[stylesTextPuplic.text20bold, styles.styleText]}>
          MUA NGAY
        </Text>
      </Pressable>

      <Pressable style={styles.buttonGreen} onPress={goToScreen}>
        <Text style={[stylesTextPuplic.text16bold, styles.styleTextGree]}>
          TÌM HIỂU NGAY
        </Text>
      </Pressable>

      <Text
        style={[stylesTextPuplic.text10book, styles.continerTextWhite]}
      >
        * Voucher chỉ áp dụng cho đơn hàng mua các sản phẩm Anlene Gold 3X,
        Anlene Gold 5X tại gian hàng Fonterra Official Retail Store trên Lazada
      </Text>
      <Text
        style={[stylesTextPuplic.text10book, styles.continerTextWhite,{marginTop: 4}]}
      >
        * Voucher chỉ áp dụng cho đơn hàng có giá trị từ 200.000đ
      </Text>
    </BoxLinear>
  );
};

const styles = StyleSheet.create({
  containerBottom: {
    paddingTop: 80,
    paddingBottom:30,
    position: "absolute",
    bottom: 0,
    width: "100%",
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
  continerTextWhite: {
    textAlign: "center",
    color: colorPuplic.white,
  },
  styleText: {
    color: colorPuplic.white,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  styleTextGree: {
    color: "#73A442",
  },
  buttonGreen: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: "#73A442",
    paddingHorizontal: 34,
    paddingVertical: 8,
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: 8,
    marginBottom: 12,
  },
  button: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B70002",
    alignSelf: "center",
    paddingHorizontal: 36,
    paddingVertical: 8,
    shadowColor: "rgba(71, 2, 2, 1)",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    elevation: 3,
    shadowOpacity: 0.3,
  },
});

export default ComponentBottom;

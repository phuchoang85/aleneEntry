import {
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";
import BoxLinear from "@/components/BoxLinear";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";
import CardSale from "./CardSale";

const ComponentBottom = ({
  goToScreen,
  goToWeb,
}: {
  goToWeb: () => void;
  goToScreen: () => void;
}) => {
  const { width: MAX_WIDTH, height: MAX_HEIGHT } = useWindowDimensions();
  const styles = StyleSheet.create({
    containerBottom: {
      paddingBottom: 50,
      paddingHorizontal: MAX_WIDTH >= 1024 ? 48 : 18,
      paddingTop: MAX_WIDTH >= 1024 ? 0 : 100,
      marginTop: MAX_WIDTH >= 1024 ? 0 : MAX_HEIGHT - 340,
      width: MAX_WIDTH >= 1024 ? "62%" : "100%",
      alignItems: MAX_WIDTH >= 1024 ? "flex-start" : "center",
    },
    continerTextWhite: {
      textAlign: MAX_WIDTH >= 1024 ? "left" : "center",
      color: colorPuplic.white,
      marginRight: MAX_WIDTH >= 1024 ? 300 : 0,
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
      backgroundColor: "white",
      marginTop: 8,
      marginBottom: 12,
    },
    button: {
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#B70002",
      paddingHorizontal: 36,
      paddingVertical: 8,
      shadowColor: "rgba(71, 2, 2, 1)",
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 5,
      elevation: 3,
      shadowOpacity: 0.3,
    },
  });

  return (
    <BoxLinear
      colors={colorLinearPublic.mauKV2}
      styles={styles.containerBottom}
      start={{ x: 0.5, y: 0 }}
      end={{ x: MAX_WIDTH >= 1024 ? 0 : 0.5, y: MAX_WIDTH >= 1024 ? 0 : 0.1 }}
    >
      <CardSale />

      <Pressable style={styles.button} onPress={goToWeb}>
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
        style={[
          MAX_WIDTH >= 1024
            ? stylesTextPuplic.text14bookItalic
            : stylesTextPuplic.text10book,
          styles.continerTextWhite,
        ]}
      >
        * Voucher chỉ áp dụng cho đơn hàng mua các sản phẩm Anlene Gold 3X,
        Anlene Gold 5X tại gian hàng Fonterra Official Retail Store trên Lazada
      </Text>
      <Text
        style={[
          MAX_WIDTH >= 1024
            ? stylesTextPuplic.text14bookItalic
            : stylesTextPuplic.text10book,
          styles.continerTextWhite,
          { marginTop: 4 },
        ]}
      >
        * Voucher chỉ áp dụng cho đơn hàng có giá trị từ 200.000đ
      </Text>
    </BoxLinear>
  );
};

export default ComponentBottom;

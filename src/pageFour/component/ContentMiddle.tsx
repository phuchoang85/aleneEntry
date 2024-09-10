import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";
import LinearTextStyle from "@/components/LinearTextStyle";
const { width: MAX_WIDTH } = Dimensions.get("screen");
const ContentMiddle = ({
  backgroundSubmit,
}: {
  backgroundSubmit: () => {
    colors: string[];
    locations: number[];
  };
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@images/analene_and_four_circle.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text
        style={[
          MAX_WIDTH >= 1024
            ? stylesTextPuplic.text8reg
            : stylesTextPuplic.text6reg,
          styles.textWhite,
        ]}
      >
        {"*Mỗi 10 năm. Nguồn: Daly et al., 2013. BMC Geriatrics 13:71\n" +
          "**Mỗi 5-7 năm sau khi mãn kinh. Nguồn: National Osteoporosis Foundation\n" +
          "(2009). Hormones and Healthy Bones"}
      </Text>

      <LinearTextStyle
        colors={
          backgroundSubmit() === colorLinearPublic.luuy
            ? colorLinearPublic.feedback
            : colorLinearPublic.linearYellowhao
        }
        styles={[
          MAX_WIDTH >= 1024
            ? stylesTextPuplic.text18bold
            : stylesTextPuplic.text13bold,
          styles.textLinear,
        ]}
      >
        LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHỎE
      </LinearTextStyle>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: MAX_WIDTH >= 1024 ? 488 : 282,
    height: MAX_WIDTH >= 1024 ? 442 : 211,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  textWhite: {
    color: colorPuplic.white,
    marginBottom: 6,
    textAlign: "center",
  },
  textLinear: {
    height: 18,
    textAlign: "center",
    color: colorPuplic.yellow,
  },
});

export default ContentMiddle;

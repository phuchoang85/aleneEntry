import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { resultReq } from "@/constant/type";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";
import LinearTextStyle from "@/components/LinearTextStyle";
const { width: MAX_WIDTH } = Dimensions.get("screen");
const ContentChange = ({ listQuest }: { listQuest: resultReq[] }) => {
  const returnColor = () => {
    if (listQuest[3].status === "bad") {
      return styles.styleTextGreen;
    } else if (listQuest.find((ele) => ele.status === "bad")) {
      return styles.styleTextRed;
    } else {
      return styles.styleTextYellow;
    }
  };

  return (
    <>
      {listQuest.find((ele) => ele.status === "bad") ? (
        <Text
          style={[
            MAX_WIDTH >= 1024
              ? stylesTextPuplic.text36bold
              : stylesTextPuplic.text26bold,
            returnColor(),
          ]}
        >
          LƯU Ý MỘT CHÚT!
        </Text>
      ) : (
        <View style={{ width: "100%" }}>
          <LinearTextStyle
            colors={colorLinearPublic.linearYellowhao}
            styles={[
              MAX_WIDTH >= 1024
                ? stylesTextPuplic.text36bold
                : stylesTextPuplic.text26bold,
              returnColor(),
            ]}
          >
            XIN CHÚC MỪNG!
          </LinearTextStyle>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  styleTextWhite: {
    color: colorPuplic.white,
    textAlign: MAX_WIDTH >= 1024 ? "left" : "center",
  },
  styleTextRed: {
    color: colorPuplic.red,
    textAlign: MAX_WIDTH >= 1024 ? "left" : "center",
  },
  styleTextYellow: {
    color: colorPuplic.yellow,
    height: 36,
    textAlign: MAX_WIDTH >= 1024 ? "left" : "center",
  },
  styleTextGreen: {
    color: colorPuplic.greenStrong,
    textAlign: MAX_WIDTH >= 1024 ? "left" : "center",
  },
});
export default ContentChange;

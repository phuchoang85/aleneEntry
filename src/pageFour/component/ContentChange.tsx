import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { resultReq } from "@/constant/type";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";
import LinearTextStyle from "@/components/LinearTextStyle";

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
        <Text style={[stylesTextPuplic.text26bold, returnColor()]}>
          LƯU Ý MỘT CHÚT!
        </Text>
      ) : (
        <View style={{ width: "100%" }}>
          <LinearTextStyle
            colors={colorLinearPublic.linearYellowhao}
            styles={[stylesTextPuplic.text26bold, returnColor()]}
          >
            XIN CHÚC MỪNG
          </LinearTextStyle>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  styleTextWhite: {
    color: colorPuplic.white,
    textAlign: "center",
  },
  styleTextRed: {
    color: colorPuplic.red,
  },
  styleTextYellow: {
    color: colorPuplic.yellow,
    height: 36,
    textAlign: "center",
  },
  styleTextGreen: {
    color: colorPuplic.greenStrong,
  },
});
export default ContentChange;

import { StyleSheet, Animated, Dimensions, Alert, View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import LinearTextStyle from "@/components/LinearTextStyle";
import { stylesTextPuplic } from "@/constant/stylesPuplic";
import { initial, resultReq } from "@/constant/type";
import { useDispatch } from "react-redux";
import { questionSelect, updateResult } from "@/redux/slice/ResultSlice";
import ItemVideo from "./ItemVideo";
const { width: MAX_WIDTH, height: MAX_HEIGHT } = Dimensions.get("screen");

const MainViewTest = ({
  resultQ,
  animatedValue,
}: {
  resultQ: initial;
  animatedValue: Animated.Value;
}) => {
  const dispatch = useDispatch();

  const isAtTheEnd = () => {
    return resultQ.questionSelect?.id == 4;
  };
  const handleButtonPress = (result: resultReq, status: "good" | "bad") => {
    // if (result.id !== resultQ.questionSelect?.id) {
    //   Alert.alert("Thông báo hãy chọn theo thứ tự");
    //   return;
    // }

    if (!isAtTheEnd() && MAX_WIDTH < 720) {
      Animated.timing(animatedValue, {
        toValue: -(MAX_WIDTH - 24) * result.id,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }

    if (!isAtTheEnd()) {
      dispatch(questionSelect(resultQ.questionList[result.id]));
    }

    if (result.status === "noSelect") {
      dispatch(updateResult({ ...result, status: status }));
    }
  };
  return (
    <>
      <LinearTextStyle
        styles={[stylesTextPuplic.text22regular, styles.linearText]}
      >
        Kiểm tra {resultQ.questionSelect?.content}
      </LinearTextStyle>

      <Animated.View
        style={[
          styles.containerListVideo,
          {
            justifyContent: MAX_WIDTH > 720 ? "center" : "flex-start",
            transform: [{ translateX: animatedValue }],
          },
        ]}
      >
        {resultQ.questionList.map((ele) => (
          <ItemVideo
            key={ele.id}
            questionSelected={resultQ.questionSelect}
            data={ele}
            handleButtonPress={handleButtonPress}
          />
        ))}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  linearText: { textAlign: "center", height: 40 },
  containerListVideo: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default MainViewTest;

import { StyleSheet, Animated, Dimensions, View } from "react-native";
import React from "react";
import LinearTextStyle from "@/components/LinearTextStyle";
import { colorLinearPublic, stylesTextPuplic } from "@/constant/stylesPuplic";
import { initial, resultReq } from "@/constant/type";
import ItemVideo from "./ItemVideo";
const { width: MAX_WIDTH, height: MAX_HEIGHT } = Dimensions.get("screen");

const MainViewTest = ({
  resultQ,
  animatedValue,
  nextQuestion,
  updateResultAQuestion,
}: {
  resultQ: initial;
  animatedValue: Animated.Value;
  nextQuestion: () => void;
  updateResultAQuestion: (status: "good" | "bad", result: resultReq) => void;
}) => {
  const isAtTheEnd = () => {
    return resultQ.questionSelect?.id == 4;
  };
  const handleButtonPress = (result: resultReq, status: "good" | "bad") => {
    if (
      (resultQ.questionSelect?.status !== "noSelect" ||
        result.status !== "noSelect") &&
      MAX_WIDTH >= 1024
    ) {
      return;
    }

    if (!isAtTheEnd() && MAX_WIDTH < 1024) {
      Animated.timing(animatedValue, {
        toValue: -(MAX_WIDTH - 14) * result.id,
        duration: 500,
        useNativeDriver: true,
      }).start();
      nextQuestion();
    }

    updateResultAQuestion(status, result);
  };
  return (
    <>
      {MAX_WIDTH < 1024 && (
        <LinearTextStyle
          colors={colorLinearPublic.linearYellowhao}
          styles={[stylesTextPuplic.text22regular, styles.linearText]}
        >
          Kiểm tra {resultQ.questionSelect?.content}
        </LinearTextStyle>
      )}

      <Animated.View
        style={[
          styles.containerListVideo,
          {
            justifyContent: MAX_WIDTH >= 1024 ? "center" : "flex-start",
            gap: MAX_WIDTH >= 1024 ? 20 : 34,
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

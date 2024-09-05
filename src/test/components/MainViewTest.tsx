import {
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import React from "react";
import LinearTextStyle from "@/components/LinearTextStyle";
import { stylesTextPuplic } from "@/constant/stylesPuplic";
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
      nextQuestion();
    }

    if (result.status === "noSelect") {
      updateResultAQuestion(status, result);
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

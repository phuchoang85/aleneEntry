import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import ItemStatusTest from "./ItemStatusTest";
import { initial } from "@/constant/type";

const { width: MAX_WIDTH } = Dimensions.get("screen");

const StatusTest = ({ resultQ }: { resultQ: initial }) => {
  return (
    <View style={styles.container}>
      {resultQ.questionList.map((ele) => {
        return (
          <ItemStatusTest
            key={ele.id}
            {...ele}
            requestSelected={resultQ.questionSelect}
          />
        );
      })}

      <View style={styles.containerLine}>
        <View
          style={[
            styles.line,
            {
              borderStyle:
                (resultQ.questionList[0].status &&
                  resultQ.questionList[1].status) !== "noSelect"
                  ? "solid"
                  : "dashed",
            },
          ]}
        />
        <View
          style={[
            styles.line,
            {
              borderStyle:
                (resultQ.questionList[1].status &&
                  resultQ.questionList[2].status) !== "noSelect"
                  ? "solid"
                  : "dashed",
            },
          ]}
        />
        <View
          style={[
            styles.line,
            {
              borderStyle:
                (resultQ.questionList[2].status &&
                  resultQ.questionList[3].status) !== "noSelect"
                  ? "solid"
                  : "dashed",
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLine: {
    position: "absolute",
    bottom: 44,
    width: MAX_WIDTH - 120,
    flexDirection: "row",
    zIndex: -1,
    left: 16,
  },
  line: {
    height: 1,
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
  },
  container: {
    height: 72,
    width: "100%",
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    marginVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 14,
    position: "relative",
  },
});

export default StatusTest;

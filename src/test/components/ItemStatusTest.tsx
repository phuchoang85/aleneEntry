import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";
import { resultReq } from "@/constant/type";

const ItemStatusTest = ({
  id,
  content,
  status,
  requestSelected,
}: {
  id: number;
  content: string;
  status: "good" | "bad" | "noSelect";
  requestSelected: resultReq | null;
}) => {
  return (
    <View style={styles.container}>
      {status === "good" ? (
        <View style={styles.circleImage}>
          <Image style={styles.image} source={require("@images/good.png")} />
        </View>
      ) : status === "bad" ? (
        <View style={styles.circleImage}>
          <Image style={styles.image} source={require("@images/bad.png")} />
        </View>
      ) : requestSelected?.id === id ? (
        <View style={styles.circleImage}>
          <Image
            style={styles.image}
            source={require("@images/selected.png")}
          />
        </View>
      ) : (
        <View style={styles.circle}>
          <Text
            style={[
              stylesTextPuplic.text12regular,
              { color: colorPuplic.white },
            ]}
          >
            {id}
          </Text>
        </View>
      )}

      <Text
        style={[stylesTextPuplic.text12regular, { color: colorPuplic.white }]}
      >
        {content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  circleImage: {
    width: 24,
    height: 24,
    borderRadius: 100,
    backgroundColor: colorPuplic.white,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colorPuplic.white,
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    backgroundColor: "green",
    height: 24,
  },
  container: {
    position: "relative",
    alignItems: "center",
  },
});

export default ItemStatusTest;

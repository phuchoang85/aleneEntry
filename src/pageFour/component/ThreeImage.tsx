import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";
import BackgroundPage from "@/components/BackgroundPage";

const ThreeImage = () => {
  type data = {
    id: number;
    contentWhite: string;
    contentYellow: string;
    image: number;
  };

  const listData: data[] = [
    {
      id: 1,
      contentWhite: "Khối cơ",
      contentYellow: "Mất đi",
      image: require("@images/less_muscle.png"),
    },
    {
      id: 2,
      contentWhite: "Mật độ xương",
      contentYellow: "Suy giảm",
      image: require("@images/less_bone_density.png"),
    },
    {
      id: 3,
      contentWhite: "Khớp",
      contentYellow: "Thoái hóa",
      image: require("@images/knee_osteoarthritis.png"),
    },
  ];

  const _renderItem = (item: data) => {
    return (
      <View key={item.id} style={styles.containerItem}>
        <Image source={item.image} />
        <BackgroundPage
          colors={colorLinearPublic.feedback}
          styles={styles.containerText}
        >
          <Text style={[stylesTextPuplic.text12reg, styles.textWhite]}>
            {item.contentWhite.toLocaleUpperCase()}
          </Text>
          <Text style={[stylesTextPuplic.text12reg, styles.textYellow]}>
            {item.contentYellow.toLocaleUpperCase()}
          </Text>
        </BackgroundPage>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {listData.map((item, index) => _renderItem(item))}
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginBottom: 6,
  },
  containerText: {
    borderWidth: 1,
    borderColor: colorPuplic.white,
    borderRadius: 8,
    minWidth: 100,
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  textWhite: {
    color: colorPuplic.white,
  },
  textYellow: {
    color: colorPuplic.yellow,
  },
});

export default ThreeImage;

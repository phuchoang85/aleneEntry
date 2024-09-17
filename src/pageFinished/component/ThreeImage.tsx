import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";
import BackgroundPage from "@/components/BackgroundPage";

const ThreeImage = () => {
  const { width: MAX_WIDTH } = useWindowDimensions();
  const styles = StyleSheet.create({
    image: {
      width: MAX_WIDTH >= 1024 ? 140 : 86,
      height: MAX_WIDTH >= 1024 ? 140 : 86,
    },
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
      minWidth: MAX_WIDTH >= 1024 ? 158 : 100,
      alignItems: "center",
      paddingVertical: MAX_WIDTH >= 1024 ? 10 : 5,
      paddingHorizontal: 8,
    },
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: 600,
    },
    textWhite: {
      color: colorPuplic.white,
    },
    textYellow: {
      color: colorPuplic.yellow,
    },
  });

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
        <Image source={item.image} style={styles.image} />
        <BackgroundPage
          colors={colorLinearPublic.feedback}
          styles={styles.containerText}
        >
          <Text
            style={[
              MAX_WIDTH >= 1024
                ? stylesTextPuplic.text14regular
                : stylesTextPuplic.text12reg,
              styles.textWhite,
            ]}
          >
            {item.contentWhite.toLocaleUpperCase()}
          </Text>
          <Text
            style={[
              MAX_WIDTH >= 1024
                ? stylesTextPuplic.text14regular
                : stylesTextPuplic.text12reg,
              styles.textYellow,
            ]}
          >
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

export default ThreeImage;

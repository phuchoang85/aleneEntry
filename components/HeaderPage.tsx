import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";

type headerProp = {
  imageLeft?: ImageSourcePropType | null;
  acctionLeft?: () => void | null;
  numberPage: string;
  imageRight?: ImageSourcePropType | null;
  acctionRight?: () => void | null;
};

const HeaderPage = ({
  imageLeft,
  numberPage,
  imageRight,
  acctionLeft,
  acctionRight,
}: headerProp) => {
  return (
    <View style={styles.container}>
      {imageLeft ? (
        <Pressable style={styles.containerButton} onPress={acctionLeft}>
          <Image style={styles.styleImage} source={imageLeft} />
        </Pressable>
      ) : <View style={styles.containerButton} />}

      <Text style={[stylesTextPuplic.text12regular,{color: colorPuplic.white}]}>
        {"< Trang " + numberPage + "/6 >"}
      </Text>

      {imageRight ? (
        <Pressable style={styles.containerButton} onPress={acctionRight}>
          <Image style={styles.styleImage} source={imageRight} />
        </Pressable>
      ) : <View style={styles.containerButton} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 8,
  },
  containerButton: {
    height: 32,
    width: 60,
    alignItems:'center',
    justifyContent: 'center',
  },
  styleImage:{
   
  }
});

export default HeaderPage;

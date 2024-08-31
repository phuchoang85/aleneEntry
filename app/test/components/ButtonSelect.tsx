import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { resultReq } from "@/constant/type";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";

const ButtonSelect = ({
  handleButtonPress,
  content,
  image,
}: {
  handleButtonPress: () => void;
  content: string;
  image: number;
}) => {
  return (
    <Pressable
      style={{
        flexDirection: "column",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#71A162",
        gap: 6,
        width: 90,
        height: 90,
      }}
      onPress={handleButtonPress}
    >
      <Image
        source={image}
        style={{ backgroundColor: "white", borderRadius: 100 }}
      />
      <Text style={[stylesTextPuplic.text12bold,{color: colorPuplic.white}]}>{content}</Text>
    </Pressable>
  );
};

export default ButtonSelect;

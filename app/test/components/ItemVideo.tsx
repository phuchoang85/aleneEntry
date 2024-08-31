import { View, Text, Image, Pressable, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import { ResizeMode, Video } from "expo-av";
import { resultReq } from "@/constant/type";
import ButtonSelect from "./ButtonSelect";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";
const videoDemo = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";
const { width: MAX_WIDTH, height: MAX_HEIGHT } = Dimensions.get("screen");
const ItemVideo = ({
  data,
  handleButtonPress,
  questionSelected,
}: {
  data: resultReq;
  handleButtonPress: (data: resultReq, status: "good" | "bad") => void;
  questionSelected: resultReq | null;
}) => {
  const videoRef = useRef<Video>(null);
  const reponsiveMaxView = () => {
    if (MAX_WIDTH > 720) return { maxWidth: 225 };
    else return null;
  };

  const reponsiveVideo = () => {
    if (MAX_WIDTH > 720) return { maxWidth: 225, maxHeight: 225 };
    else return null;
  };
  useEffect(() => {
    if (data.id === questionSelected?.id && videoRef.current) {
      videoRef.current?.playAsync();
    } else {
      videoRef.current?.pauseAsync();
    }
  }, [questionSelected]);

  return (
    <View
      style={{ marginRight: 24, width: MAX_WIDTH - 48, ...reponsiveMaxView() }}
    >
      <Video
        source={{ uri: data.video || videoDemo }}
        isLooping
        ref={videoRef}
        style={{
          width: MAX_WIDTH - 48,
          height: MAX_WIDTH - 48,
          borderRadius: 16,
          ...reponsiveVideo(),
        }}
        resizeMode={ResizeMode.STRETCH}
      />

      <Text
        style={[
          { textAlign: "center", color: colorPuplic.white, marginVertical: 10, paddingHorizontal: 14 },
          stylesTextPuplic.text15reg,
        ]}
      >
        {data.guide}
      </Text>

      <View
        style={{
          flexDirection: "row",
          gap: 20,
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <ButtonSelect
          handleButtonPress={() => handleButtonPress(data, "good")}
          content="Được"
          image={require("@images/good.png")}
        />

        <ButtonSelect
          handleButtonPress={() => handleButtonPress(data, "bad")}
          content="Không được"
          image={require("@images/bad.png")}
        />
      </View>
    </View>
  );
};

export default ItemVideo;

import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ResizeMode, Video } from "expo-av";
import { resultReq } from "@/constant/type";
import ButtonSelect from "./ButtonSelect";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";
import { usePathname, useRouter } from "expo-router";
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
  const [isPlaying, setIsPlaying] = useState(true);
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
    <View style={[styles.container, reponsiveMaxView()]}>
      <Pressable
        onPress={() => {
          setIsPlaying(!isPlaying);
          isPlaying
            ? videoRef.current?.pauseAsync()
            : videoRef.current?.playAsync();
        }}
        style={[
          styles.viewVideo,
          {
            ...reponsiveVideo(),
            borderWidth: data.status !== "noSelect" ? 3 : 0,

            borderColor:
              data.status === "good" ? colorPuplic.greenWeak : colorPuplic.red,
          },
        ]}
      >
        <Video
          source={{ uri: data.video || videoDemo }}
          isLooping
          shouldPlay
          ref={videoRef}
          resizeMode={ResizeMode.CONTAIN}
          style={styles.video}
        />

        {data.status !== "noSelect" && (
          <Image
            style={styles.icon}
            source={
              data.status === "good"
                ? require("@images/good.png")
                : require("@images/bad.png")
            }
          />
        )}
      </Pressable>

      <Text style={[styles.textGuide, stylesTextPuplic.text15reg]}>
        {data.guide}
      </Text>

      <View style={styles.containerButton}>
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

const styles = StyleSheet.create({
  container: {
    marginRight: 24,
    width: MAX_WIDTH - 48,
  },
  viewVideo: {
    width: MAX_WIDTH - 48,
    height: MAX_WIDTH - 48,
    borderRadius: 18,
    backgroundColor:'black'
  },
  video: {
    flex: 1,
    borderRadius: 16,
  },
  icon: {
    position: "absolute",
    top: -12,
    right: -12,
    borderRadius: 100,
    backgroundColor: colorPuplic.white,
  },
  textGuide: {
    textAlign: "center",
    color: colorPuplic.white,
    marginVertical: 10,
    paddingHorizontal: 14,
  },
  containerButton: {
    flexDirection: "row",
    gap: 20,
    alignSelf: "center",
    alignItems: "center",
  },
});

export default ItemVideo;

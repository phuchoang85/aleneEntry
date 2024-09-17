import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  Pressable,
  Platform,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import React, { memo, useEffect, useRef, useState } from "react";
import {
  AVPlaybackStatus,
  AVPlaybackStatusSuccess,
  ResizeMode,
  Video,
} from "expo-av";
import { resultReq } from "@/constant/type";
import ButtonSelect from "./ButtonSelect";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import storage from "@react-native-firebase/storage";

const ItemVideo = ({
  data,
  handleButtonPress,
  questionSelected,
}: {
  data: resultReq;
  handleButtonPress: (data: resultReq, status: "good" | "bad") => void;
  questionSelected: resultReq | null;
}) => {
  const { width: MAX_WIDTH, height: MAX_HEIGHT } = useWindowDimensions();
  const styles = StyleSheet.create({
    containerButtonSelect: {
      width: 90,
      height: 90,
      borderRadius: 12,
    },
    container: {
      width: MAX_WIDTH - 48,
      height: MAX_WIDTH >= 1024 ? 408 : "auto",
    },
    viewVideo: {
      width: MAX_WIDTH - 48,
      height: MAX_WIDTH - 48,
      borderRadius: 20,
      backgroundColor: "black",
    },
    video: {
      borderRadius: 16,
      flex: 1,
      maxWidth: MAX_WIDTH >= 1024 ? 255 : MAX_WIDTH - 48,
      maxHeight: MAX_WIDTH >= 1024 ? 255 : MAX_WIDTH - 48,
    },
    videoInLayout: {
      width: MAX_WIDTH >= 1024 ? 255 : MAX_WIDTH - 48,
      height: MAX_WIDTH >= 1024 ? 255 : MAX_WIDTH - 48,
      position: "absolute",
      left: Platform.OS === "web" && MAX_WIDTH >= 1024 ? -20 : 0,
    },
    loadingVideo: {
      borderRadius: 16,
      width: "100%",
      height: "100%",
      maxWidth: MAX_WIDTH >= 1024 ? 255 : MAX_WIDTH - 48,
      maxHeight: MAX_WIDTH >= 1024 ? 255 : MAX_WIDTH - 48,
      backgroundColor: "white",
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
    textContent: {
      textAlign: "center",
      color: colorPuplic.white,
      marginBottom: 8,
    },
  });
  const navigation = useNavigation();
  const [statusVideo, setStatus] = useState<AVPlaybackStatusSuccess>();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<Video>(null);
  const [videoFirebase, setvideoFirebase] = useState("");
  const reponsiveMaxView = () => {
    if (MAX_WIDTH >= 1024) return { maxWidth: 225 };
    else return null;
  };

  const isVideoLoaddingSucess = () => {
    return (
      statusVideo?.durationMillis !== undefined &&
      statusVideo?.durationMillis > 1
    );
  };

  const reponsiveVideo = () => {
    if (MAX_WIDTH >= 1024) return { maxWidth: 225, maxHeight: 225 };
    else return null;
  };

  const hanldeCheckVideo = (data: resultReq, status: "good" | "bad") => {
    if (isVideoLoaddingSucess()) {
      handleButtonPress(data, status);
    }
  };

  const isSelectedStatus = () => {
    return data?.status;
  };
  useEffect(() => {
    if (MAX_WIDTH >= 1024) {
      if (!videoFirebase) {
        loadVideoFromFireBase(data.video);
        videoRef.current?.playAsync();
        setIsPlaying(true);
      }
    } else {
      if (questionSelected?.id === data.id && !videoFirebase) {
        loadVideoFromFireBase(data.video);
      }

      if (questionSelected?.id === data.id) {
        if (
          data.id === questionSelected?.id &&
          videoRef.current &&
          !isPlaying &&
          videoFirebase
        ) {
          videoRef.current?.playAsync();
          setIsPlaying(true);
        }
      } else {
        if (isPlaying && videoRef.current && videoFirebase) {
          videoRef.current?.pauseAsync();
          setIsPlaying(false);
        }
      }
    }
  }, [questionSelected, videoFirebase]);

  useEffect(() => {
    // Dừng video khi component unmount
    const unsubscribe = navigation.addListener("blur", () => {
      if (videoRef.current) {
        videoRef.current.pauseAsync();
      }
    });
    return unsubscribe;
  }, [navigation]);

  const loadVideoFromFireBase = async (linkVideo: string) => {
    await storage()
      .ref("/" + linkVideo)
      .getDownloadURL()
      .then((url) => {
        setvideoFirebase(url);
      })
      .catch((error) => {
        console.error("Error getting download URL:", error);
        setvideoFirebase("");
      });
  };

  useEffect(() =>{
    if(videoRef && videoFirebase && statusVideo?.didJustFinish){
      videoRef.current?.replayAsync();
    }
  },[statusVideo])

  return (
    <View style={[styles.container, reponsiveMaxView()]}>
      {MAX_WIDTH >= 1024 && (
        <Text style={[stylesTextPuplic.text16bold, styles.textContent]}>
          Kiểm tra {data.content}
        </Text>
      )}

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

            borderColor: data.status === "good" ? "#73A442" : colorPuplic.red,
          },
        ]}
      >
        <Video
          source={{ uri: videoFirebase }}
          isLooping
          ref={videoRef}
          resizeMode={ResizeMode.COVER}
          onPlaybackStatusUpdate={(status: any) => setStatus(() => status)}
          style={styles.video}
          videoStyle={styles.videoInLayout}
        />

        {!isVideoLoaddingSucess() && (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loadingVideo}
          />
        )}

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

      <Text
        style={[
          styles.textGuide,
          MAX_WIDTH >= 1024
            ? stylesTextPuplic.text18regular
            : stylesTextPuplic.text15reg,
        ]}
      >
        {data.guide}
      </Text>

      <View style={styles.containerButton}>
        <LinearGradient
          colors={colorLinearPublic.goldLinear.colors}
          locations={colorLinearPublic.goldLinear.locations}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0 }}
          style={[
            styles.containerButtonSelect,
            { padding: isSelectedStatus() === "good" ? 2 : null },
          ]}
        >
          <ButtonSelect
            handleButtonPress={() => hanldeCheckVideo(data, "good")}
            content={data.id === 4 ? "Hiếm khi" : "Được"}
            image={require("@images/yes.png")}
          />
        </LinearGradient>

        <LinearGradient
          colors={colorLinearPublic.goldLinear.colors}
          locations={colorLinearPublic.goldLinear.locations}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0 }}
          style={[
            styles.containerButtonSelect,
            { padding: isSelectedStatus() === "bad" ? 2 : null },
          ]}
        >
          <ButtonSelect
            handleButtonPress={() => hanldeCheckVideo(data, "bad")}
            content={data.id === 4 ? "Nhiều" : "Không được"}
            image={require("@images/no.png")}
          />
        </LinearGradient>
      </View>
    </View>
  );
};

export default memo(ItemVideo);

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";
import BackgroundPage from "@/components/BackgroundPage";
import HeaderPage from "@/components/HeaderPage";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "@/app";
import ContentChange from "./component/ContentChange";
import ThreeImage from "./component/ThreeImage";
import { dataPageFour } from "@/constant/data";
import ShowMoreText from "./component/ShowMoreText";
import ButtonStrokeLinear from "@/components/ButtonStrokeLinear";
import ContentMiddle from "./component/ContentMiddle";

const PageFour = () => {
  const { width: MAX_WIDTH } = useWindowDimensions();
  const styles = StyleSheet.create({
    image: {
      width: MAX_WIDTH >= 1024 ? 132 : 98,
      height: MAX_WIDTH >= 1024 ? 36 : 27,
      marginBottom: 8,
      alignSelf: "center",
    },
    container: {
      flex: 1,
      paddingTop: MAX_WIDTH >= 1024 ? 22.5 : 12.5,
    },
    containerItem: {
      flex: 1,
      paddingHorizontal: 24,
      paddingBottom: 30,
      flexDirection: MAX_WIDTH >= 1024 ? "row" : "column",
    },
    textWhite: {
      color: colorPuplic.white,
      textAlign: MAX_WIDTH >= 1024 ? "left" : "center",
      marginTop: 10,
    },
    containerInItem: {
      flex: 1,
      alignItems: MAX_WIDTH >= 1024 ? "flex-start" : "center",
    },
  });

  const listQuest = useSelector(
    (state: RootState) => state.result.questionList
  );
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [showMore, setShowMore] = useState(false);

  const backgroundSubmit = () => {
    if (listQuest[3].status === "bad") {
      return colorLinearPublic.luuy;
    } else if (listQuest.find((ele) => ele.status === "bad")) {
      return colorLinearPublic.gray;
    } else {
      return colorLinearPublic.linear;
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  const goHome = () => {
    navigation.navigate("Welcome");
  };

  const goToPage = () => {
    navigation.navigate("PageFive");
  };

  const returnContent = () => {
    if (listQuest[3].status === "bad") {
      return dataPageFour[0];
    } else if (listQuest.find((ele) => ele.status === "bad")) {
      return dataPageFour[1];
    } else {
      return dataPageFour[2];
    }
  };

  return (
    <BackgroundPage styles={styles.container} colors={backgroundSubmit()}>
      <ScrollView style={styles.container}>
        <HeaderPage
          acctionLeft={goBack}
          acctionRight={goHome}
          imageLeft={require("@images/arrow_back.png")}
          imageRight={require("@images/home.png")}
          numberPage="4"
        />
        <Image source={require("@images/logo.png")} style={styles.image} />
        <View style={styles.containerItem}>
          <View style={styles.containerInItem}>
            <ContentChange listQuest={listQuest} />
            <Text
              style={[
                MAX_WIDTH >= 1024
                  ? stylesTextPuplic.text16regular
                  : stylesTextPuplic.text13reg,
                styles.textWhite,
              ]}
            >
              {returnContent().content1}
            </Text>
            <ThreeImage />
            <Text
              style={[
                MAX_WIDTH >= 1024
                  ? stylesTextPuplic.text14regular
                  : stylesTextPuplic.text12reg,
                styles.textWhite,
              ]}
            >
              {returnContent().content2}
            </Text>
            {MAX_WIDTH < 1024 && (
              <ContentMiddle backgroundSubmit={backgroundSubmit} />
            )}
            <Text
              style={[
                MAX_WIDTH >= 1024
                  ? stylesTextPuplic.text14regular
                  : stylesTextPuplic.text12reg,
                styles.textWhite,
              ]}
            >
              {returnContent().content3}
            </Text>
            <ShowMoreText
              backgroundSubmit={backgroundSubmit}
              showMore={showMore}
              setShowMore={setShowMore}
            />

            <ButtonStrokeLinear
              textSize={stylesTextPuplic.text20bold}
              content="MUA NGAY"
              onPress={goToPage}
            />
          </View>

          {MAX_WIDTH >= 1024 && (
            <ContentMiddle backgroundSubmit={backgroundSubmit} />
          )}
        </View>
      </ScrollView>
    </BackgroundPage>
  );
};

export default PageFour;

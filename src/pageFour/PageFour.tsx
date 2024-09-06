import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
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
import LinearTextStyle from "@/components/LinearTextStyle";
import { dataPageFour } from "@/constant/data";
import ShowMoreText from "./component/ShowMoreText";
import ButtonStrokeLinear from "@/components/ButtonStrokeLinear";

const PageFour = () => {
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

  const goToPage = () =>{
    navigation.navigate("PageFive");
  }

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
        <View style={styles.containerItem}>
          <ContentChange listQuest={listQuest} />
          <Text style={[stylesTextPuplic.text13reg, styles.textWhite]}>
            {returnContent().content1}
          </Text>

          <ThreeImage />
          <Text style={[stylesTextPuplic.text12reg, styles.textWhite]}>
            {returnContent().content2}
          </Text>

          <Image
            source={require("@images/analene_and_four_circle.png")}
            style={{ width: 282, height: 211 }}
            resizeMode="contain"
          />

          <Text style={[stylesTextPuplic.text6reg, styles.textWhite]}>
            {"*Mỗi 10 năm. Nguồn: Daly et al., 2013. BMC Geriatrics 13:71\n" +
              "**Mỗi 5-7 năm sau khi mãn kinh. Nguồn: National Osteoporosis Foundation\n" +
              "(2009). Hormones and Healthy Bones"}
          </Text>

          <View style={{ width: "100%" }}>
            <LinearTextStyle
              colors={
                backgroundSubmit() === colorLinearPublic.luuy
                  ? colorLinearPublic.feedback
                  : colorLinearPublic.linearYellowhao
              }
              styles={[stylesTextPuplic.text13bold, styles.textLinear]}
            >
              LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHỎE
            </LinearTextStyle>
          </View>

          <Text style={[stylesTextPuplic.text12reg, styles.textWhite]}>
            {returnContent().content3}
          </Text>

          <ShowMoreText backgroundSubmit={backgroundSubmit} showMore={showMore} setShowMore={setShowMore} />

          <ButtonStrokeLinear content="MUA NGAY" onPress={goToPage} />
        </View>
      </ScrollView>
    </BackgroundPage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerItem: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 18,
  },
  textWhite: {
    color: colorPuplic.white,
    marginBottom: 6,
    textAlign: "center",
  },
  textLinear: {
    height: 18,
    textAlign: "center",
  },
});

export default PageFour;

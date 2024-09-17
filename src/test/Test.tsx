import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import HeaderPage from "@/components/HeaderPage";
import BackgroundPage from "@/components/BackgroundPage";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import MainViewTest from "./components/MainViewTest";
import { RootStackParams } from "@/app";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ModalCustom from "@/components/ModalCustom";
import { useTestPage } from "./hooks/useTestPage";
import ContentTop from "./components/ContentTop";

const Test = () => {
  const { width: MAX_WIDTH, height: MAX_HEIGHT } = useWindowDimensions();
  const styles = StyleSheet.create({
    buttonAccept: {
      width: 160,
      height: 44,
      borderRadius: 24,
      textAlign: "center",
      justifyContent: "center",
      alignSelf: "center",
      marginTop: 40,
      marginBottom: 8,
    },
    styleTextNormal: {
      color: colorPuplic.white,
      textAlign: "center",
    },
    container: {
      flex: 1,
      paddingTop: MAX_WIDTH >= 1024 ? 45 : 25,
    },
    containerScrollView: {
      flex: 1,
      paddingBottom: 16,
    },
    containerPadding: {
      flex: 1,
      paddingHorizontal: 24,
    },
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const {
    resultQ,
    nullQuestionSelect,
    restartQuestion,
    selectFirstQuestion,
    updateQuestionNoSelectAtNow,
    updateQuestionNoSelectAtAfaterNow,
    updateQuestionSelectedStatusToNoSelect,
    nextQuestion,
    updateResultAQuestion,
  } = useTestPage();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const acctionLeft = () => {
    const idQuestionSelect = resultQ.questionSelect?.id || 0;
    if (idQuestionSelect === 1 || resultQ.questionSelect === null) {
      nullQuestionSelect();
      restartQuestion();
      navigation.goBack();
    } else if (
      idQuestionSelect === 4 &&
      resultQ.questionList[3]?.status !== "noSelect"
    ) {
      updateQuestionNoSelectAtNow();
    } else {
      updateQuestionNoSelectAtNow();
      updateQuestionNoSelectAtAfaterNow();
      updateQuestionSelectedStatusToNoSelect();
      if (MAX_WIDTH < 720) {
        Animated.timing(animatedValue, {
          toValue: -(MAX_WIDTH - 14) * (idQuestionSelect - 2),
          duration: 500,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  const checkStatus = () => {
    if (
      resultQ.questionList.filter((question) => question.status === "noSelect")
        .length === 0
    ) {
      return false;
    }
    return true;
  };

  const goToPageSubmit = () => {
    setIsOpenModal(false);
    navigation.navigate("Submit");
  };

  const acctionRight = () => {
    nullQuestionSelect();
    restartQuestion();
    navigation.navigate("Welcome");
  };

  useFocusEffect(
    useCallback(() => {
      selectFirstQuestion();
      restartQuestion();
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, [])
  );

  return (
    <BackgroundPage styles={styles.container} colors={colorLinearPublic.linear}>
      <ScrollView style={styles.containerScrollView}>
        <HeaderPage
          acctionLeft={acctionLeft}
          acctionRight={acctionRight}
          imageLeft={require("@images/arrow_back.png")}
          imageRight={require("@images/home.png")}
          numberPage="2"
        />

        <View style={styles.containerPadding}>
          <ContentTop resultQ={resultQ} />

          <MainViewTest
            nextQuestion={nextQuestion}
            updateResultAQuestion={updateResultAQuestion}
            resultQ={resultQ}
            animatedValue={animatedValue}
          />

          <Pressable
            style={[
              styles.buttonAccept,
              {
                backgroundColor: checkStatus() ? "#B8B8B8" : colorPuplic.RED,
              },
            ]}
            disabled={checkStatus()}
            onPress={() => setIsOpenModal(true)}
          >
            <Text
              style={[
                MAX_WIDTH >= 1024
                  ? stylesTextPuplic.text20bold
                  : stylesTextPuplic.text16bold,
                styles.styleTextNormal,
              ]}
            >
              XÁC NHẬN
            </Text>
          </Pressable>

          <Text
            style={[
              MAX_WIDTH >= 1024
                ? stylesTextPuplic.text14book
                : stylesTextPuplic.text12italic,
              styles.styleTextNormal,
            ]}
          >
            Lưu ý: Bài kiểm tra không dành cho đối tượng đang bị chấn thương
            hoặc có bệnh lý về cơ, xương, khớp hoặc bệnh tiểu đường
          </Text>

          <ModalCustom
            content={`Bạn đã tham gia bài kiểm tra sức khỏe \nHãy tiếp tục để có thể nhận kế quả kiểm tra sức khỏe của bạn`}
            title="CẢM ƠN"
            nameButtonRight="TIẾP TỤC"
            isOpen={isOpenModal}
            onPressLeft={() => setIsOpenModal(false)}
            onPressRight={goToPageSubmit}
          />
        </View>
      </ScrollView>
    </BackgroundPage>
  );
};

export default Test;

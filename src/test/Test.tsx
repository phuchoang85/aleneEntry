import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import HeaderPage from "@/components/HeaderPage";
import BackgroundPage from "@/components/BackgroundPage";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";
import { useNavigation } from "@react-navigation/native";
import StatusTest from "./components/StatusTest";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  questionSelect,
  restart,
  updateResult,
} from "@/redux/slice/ResultSlice";
import MainViewTest from "./components/MainViewTest";
import { RootStackParams } from "@/app";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ModalCustom from "@/components/ModalCustom";
const { width: MAX_WIDTH, height: MAX_HEIGHT } = Dimensions.get("screen");
const Test = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const resultQ = useSelector((state: RootState) => state.result);
  const dispatch = useDispatch();
  const isAtTheEnd = () => {
    return resultQ.questionSelect?.id == 4;
  };
  const animatedValue = useRef(new Animated.Value(0)).current;
  const acctionLeft = () => {
    const idQuestionSelect = resultQ.questionSelect?.id || 0;
    if (idQuestionSelect === 1 || resultQ.questionSelect === null) {
      dispatch(questionSelect(null));
      dispatch(restart());
      navigation.goBack();
    } else if (
      idQuestionSelect === 4 &&
      resultQ.questionList[3]?.status !== "noSelect"
    ) {
      const questionNoSelectNow = {
        ...resultQ.questionSelect,
        status: "noSelect",
      };
      dispatch(updateResult(questionNoSelectNow));
    } else {
      const questtionAfter = resultQ.questionList[idQuestionSelect - 2];
      const questionNoSelectAfter = { ...questtionAfter, status: "noSelect" };
      const questionNoSelectNow = {
        ...resultQ.questionSelect,
        status: "noSelect",
      };
      dispatch(updateResult(questionNoSelectAfter));
      dispatch(updateResult(questionNoSelectNow));
      dispatch(questionSelect(questionNoSelectAfter));
      if (MAX_WIDTH < 720) {
        Animated.timing(animatedValue, {
          toValue: -(MAX_WIDTH - 24) * (idQuestionSelect - 2),
          duration: 500,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  const acctionRight = () => {
    dispatch(questionSelect(null));
    dispatch(restart());
    navigation.navigate("Welcome");
  };

  const goToPageSubmit = () => {
    navigation.navigate("Submit");
  };

  useEffect(() => {
    dispatch(questionSelect(resultQ.questionList[0]));
  }, []);
  return (
    <BackgroundPage styles={styles.container}>
      <ScrollView style={styles.containerScrollView}>
        <HeaderPage
          acctionLeft={acctionLeft}
          acctionRight={acctionRight}
          imageLeft={require("@images/arrow_back.png")}
          imageRight={require("@images/home.png")}
          numberPage="2"
        />

        <View style={styles.containerPadding}>
          <Text style={[stylesTextPuplic.text16bold, styles.styleTextNormal]}>
            KIỂM TRA CƠ - XƯƠNG - KHỚP
          </Text>

          <StatusTest resultQ={resultQ} />

          <MainViewTest
            isAtTheEnd={isAtTheEnd}
            resultQ={resultQ}
            animatedValue={animatedValue}
          />

          <Pressable
            style={[
              styles.buttonAccept,
              {
                backgroundColor:
                  resultQ.questionList[3].status !== "noSelect"
                    ? colorPuplic.RED
                    : "#B8B8B8",
              },
            ]}
            disabled={
              resultQ.questionList[3].status !== "noSelect" ? false : true
            }
            onPress={() => setIsOpenModal(true)}
          >
            <Text style={[stylesTextPuplic.text16bold, styles.styleTextNormal]}>
              XÁC NHẬN
            </Text>
          </Pressable>

          <Text style={[stylesTextPuplic.text12italic, styles.styleTextNormal]}>
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

const styles = StyleSheet.create({
  buttonAccept: {
    width: 160,
    height: 44,
    borderRadius: 24,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 8,
  },
  styleTextNormal: {
    color: colorPuplic.white,
    textAlign: "center",
  },
  container: {
    flex: 1,
  },
  containerScrollView: {
    flex: 1,
    paddingBottom: 16,
  },
  containerPadding: {
    flex: 1,
    paddingHorizontal: 24,
    overflow: "hidden",
  },
});

export default Test;

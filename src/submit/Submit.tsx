import { View, Text, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import BackgroundPage from "@/components/BackgroundPage";
import { colorLinearPublic, colorPuplic } from "@/constant/stylesPuplic";

import { RootState } from "@/redux/store";
import HeaderPage from "@/components/HeaderPage";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "@/app";
import { restart } from "@/redux/slice/ResultSlice";
import ModalCustom from "@/components/ModalCustom";
import { useDispatch, useSelector } from "react-redux";
const { width: MAX_WIDTH, height: MAX_HEIGHT } = Dimensions.get("screen");
const Submit = () => {
  const listQuest = useSelector(
    (state: RootState) => state.result.questionList
  );
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const backgroundSubmit = () => {
    if (listQuest[3].status === "bad") {
      return colorLinearPublic.luuy;
    } else if (listQuest.find((ele) => ele.status === "bad")) {
      return colorLinearPublic.gray;
    } else {
      return colorLinearPublic.mauKV;
    }
  };

  const acctionAccept = () => {
    dispatch(restart());
    navigation.goBack();
  };

  const acctionRight = () => {
    navigation.navigate("Welcome");
    dispatch(restart());
  };

  return (
    <BackgroundPage styles={styles.container} colors={backgroundSubmit()}>
      <HeaderPage
        acctionLeft={() => setIsOpenModal(true)}
        acctionRight={acctionRight}
        imageLeft={require("@images/arrow_back.png")}
        imageRight={require("@images/home.png")}
        numberPage="3"
      />
      <Text>Submit</Text>

      <ModalCustom
        content="Bạn có muốn hủy kết quả kiểm tra sức khỏe trước đó không?"
        isOpen={isOpenModal}
        onPressLeft={() => setIsOpenModal(false)}
        onPressRight={acctionAccept}
        title="THÔNG BÁO!"
        nameButtonRight="ĐỒNG Ý"
      />
    </BackgroundPage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Submit;

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import BackgroundPage from "@/components/BackgroundPage";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";
import HeaderPage from "@/components/HeaderPage";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ModalCustom from "@/components/ModalCustom";
import InputTextCustom from "./components/InputTextCustom";
import Checkbox from "expo-checkbox";
import NormalButton from "@/components/NormalButton";
import ContentChange from "./components/ContentChange";
import { RootStackParams } from "@/app";
import { useSubmit } from "./hooks/useSubmit";
const { width: MAX_WIDTH, height: MAX_HEIGHT } = Dimensions.get("screen");
const Submit = () => {
  const {
    listQuest,
    restartList,
    createFormUser,
    loading,
    errorApi,
    message,
    clearMess,
  } = useSubmit();
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const backgroundSubmit = () => {
    if (listQuest[3].status === "bad") {
      return colorLinearPublic.luuy;
    } else if (listQuest.find((ele) => ele.status === "bad")) {
      return colorLinearPublic.gray;
    } else {
      return colorLinearPublic.linear;
    }
  };

  const acctionAccept = () => {
    restartList();
    navigation.goBack();
  };

  const acctionRight = () => {
    navigation.navigate("Welcome");
    restartList();
  };

  const checkSubmitEnd = useMemo(() => {
    return () => {
      const nameError =
        !input.name || input.name.length < 5
          ? "Vui lòng nhập họ và tên (tối thiểu 5 ký tự)"
          : "";
      const emailError =
        !input.email || !/\S+@\S+\.\S+/.test(input.email)
          ? "Vui lòng nhập email hợp lệ"
          : "";
      const phoneError =
        !input.phone ||
        input.phone.length !== 10 ||
        !/^\d{10}$/.test(input.phone)
          ? "Số điện thoại phải đúng định dạng"
          : "";

      setError((prev) => {
        return {
          ...prev,
          name: nameError,
          email: emailError,
          phone: phoneError,
        };
      });
      return !nameError && !emailError && !phoneError;
    };
  }, [input]);

  const finished = () => {
    try {
      if (!checkSubmitEnd() || !isChecked) {
        return;
      }
      createFormUser(input.name, input.email, input.phone);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (loading) {
      return;
    } else if (!loading && errorApi) {
      console.log(errorApi);
      Alert.alert("Lỗi" + errorApi);
      return;
    }

    if (message) {
      // console.log("thành công " + message);
      Alert.alert("Thông báo","Lưu thành công");
      navigation.navigate('PageFour');
      clearMess();
    }
  }, [loading, errorApi, message]);

  return (
    <BackgroundPage styles={styles.container} colors={backgroundSubmit()}>
      <ScrollView style={styles.container}>
        <View style={styles.containerItem}>
          <HeaderPage
            acctionLeft={() => setIsOpenModal(true)}
            acctionRight={acctionRight}
            imageLeft={require("@images/arrow_back.png")}
            imageRight={require("@images/home.png")}
            numberPage="3"
          />
          <View style={styles.containerView}>
            <Image
              source={require("@images/logo.png")}
              style={styles.imgLogo}
            />

            <ContentChange listQuest={listQuest} />

            <InputTextCustom
              acctionSubmit={checkSubmitEnd}
              data={input.name}
              setData={(value) =>
                setInput((prev) => {
                  return { ...prev, name: value };
                })
              }
              error={error.name}
              placeHolder="Nhập họ và tên"
              isNeccessary={true}
              title="Họ và tên:"
              colorError={
                backgroundSubmit() === colorLinearPublic.luuy
                  ? colorPuplic.greenStrong
                  : colorPuplic.yellow
              }
              keyboardType="default"
            />
            <InputTextCustom
              acctionSubmit={checkSubmitEnd}
              data={input.phone}
              setData={(value) =>
                setInput((prev) => {
                  return { ...prev, phone: value };
                })
              }
              error={error.phone}
              placeHolder="Nhập số điện thoại"
              isNeccessary={true}
              title="Số điện thoại:"
              colorError={
                backgroundSubmit() === colorLinearPublic.luuy
                  ? colorPuplic.greenStrong
                  : colorPuplic.yellow
              }
              keyboardType="phone-pad"
            />
            <InputTextCustom
              acctionSubmit={checkSubmitEnd}
              data={input.email}
              setData={(value) =>
                setInput((prev) => {
                  return { ...prev, email: value };
                })
              }
              error={error.email}
              placeHolder="Nhập email"
              isNeccessary={false}
              title="Email:"
              colorError={
                backgroundSubmit() === colorLinearPublic.luuy
                  ? colorPuplic.greenStrong
                  : colorPuplic.yellow
              }
              keyboardType="default"
            />

            <View style={styles.containerCheckBox}>
              <Checkbox
                value={isChecked}
                color={isChecked ? "black" : "white"}
                onValueChange={setIsChecked}
              />
              <Text
                style={[stylesTextPuplic.text12regular, styles.styleTextWhite]}
              >
                Tôi đồng ý để Anlene Vietnam liên hệ trong bất kì chương trình
                quảng cáo sản phẩm hay khuyến mãi nào
              </Text>
            </View>

            <Text style={[stylesTextPuplic.text12italic, styles.styleTextGrey]}>
              Bằng cách điền bảng thông tin này, tôi đồng ý với việc thông tin
              của mình để xử lý dựa trên chính sách bảo mật của Anlene
            </Text>
          </View>

          <NormalButton
            backgroundColor={
              !error.email && !error.name && !error.phone
                ? colorPuplic.RED
                : colorPuplic.grey
            }
            content="HOÀN THÀNH"
            onPress={finished}
            textColor={colorPuplic.white}
          />
        </View>
      </ScrollView>

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
  containerItem: {
    flex: 1,
    alignItems: MAX_WIDTH > 700 ? "center" : undefined,
  },
  containerCheckBox: {
    flexDirection: "row",
    gap: 8,
    marginTop: 16,
    marginBottom: 8,
    alignItems: "center",
  },
  styleTextWhite: {
    color: colorPuplic.white,
  },
  styleTextGrey: {
    color: colorPuplic.grey,
  },
  imgLogo: {
    width: 110,
    height: 31,
    marginVertical: 16,
  },
  container: {
    flex: 1,
    paddingTop: 7.5,
  },
  containerView: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    maxWidth: 660,
    marginBottom: 50,
  },
});

export default Submit;

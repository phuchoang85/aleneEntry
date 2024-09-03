import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import React from "react";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";
import NormalButton from "./NormalButton";

const ModalCustom = ({
  title,
  content,
  onPressLeft,
  onPressRight,
  nameButtonRight,
  isOpen,
}: {
  title: string;
  content: string;
  onPressLeft: () => void;
  onPressRight: () => void;
  nameButtonRight: string;
  isOpen: boolean;
}) => {
  return (
    <Modal
      visible={isOpen}
      transparent={true}
      onRequestClose={onPressLeft}
      statusBarTranslucent={true}
      animationType="slide"
    >
      <View style={styles.containerModal}>
        <View style={styles.container}>
          <Text style={[stylesTextPuplic.text24bold, styles.textTitle]}>
            {title}
          </Text>
          <Text  style={[stylesTextPuplic.text14regular, styles.textContent]}>{content}</Text>
          <View style={styles.containerButton}>
            <NormalButton
              content="HỦY"
              backgroundColor={colorPuplic.white}
              onPress={onPressLeft}
              textColor={colorPuplic.RED}
            />

            <NormalButton
              content={nameButtonRight}
              backgroundColor={colorPuplic.RED}
              onPress={onPressLeft}
              textColor={colorPuplic.white}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  textContent: {
    color: colorPuplic.black1,
  },
  textTitle: {
    color: colorPuplic.green2,
  },
  container: {
    backgroundColor: colorPuplic.white,
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  containerModal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ModalCustom;

import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import React from "react";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";

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
          <Text style={[stylesTextPuplic.text24bold, styles.textTile]}>
            {title}
          </Text>
          <Text>{content}</Text>
          <View>
            <Pressable onPress={onPressLeft}>
              <Text>HỦY</Text>
            </Pressable>

            <Pressable onPress={onPressRight}>
              <Text>{nameButtonRight}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textTile: {
    color: colorPuplic.green2,
  },
  container: {
    backgroundColor: colorPuplic.white,
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    maxWidth: 300,
  },
  containerModal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ModalCustom;

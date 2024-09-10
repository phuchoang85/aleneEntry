import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";
const { width: MAX_WIDTH } = Dimensions.get("screen");
const InputTextCustom = ({
  title,
  placeHolder,
  colorError,
  data,
  setData,
  acctionSubmit,
  error,
  isNeccessary,
  keyboardType,
}: {
  title: string;
  placeHolder: string;
  colorError: string;
  data: string;
  setData: (value: string) => void;
  acctionSubmit: () => void;
  error: string;
  isNeccessary: boolean;
  keyboardType: "text" | "numeric";
}) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={[
            MAX_WIDTH >= 1024
              ? stylesTextPuplic.text18regular
              : stylesTextPuplic.text14regular,
            styles.textColorWhite,
          ]}
        >
          {title}
        </Text>
        {isNeccessary && <Text style={{ color: colorError }}>{"*"}</Text>}
      </View>
      <TextInput
        placeholderTextColor={colorPuplic.grey}
        placeholder={placeHolder}
        value={data}
        onChangeText={setData}
        onBlur={acctionSubmit}
        style={[
          stylesTextPuplic.text14regular,
          styles.inputText,
          { borderColor: error ? colorError : "transparent" },
        ]}
        inputMode={keyboardType}
      />

      <Text
        style={[
          MAX_WIDTH >= 1024
            ? stylesTextPuplic.text14regular
            : stylesTextPuplic.text12regular,
          { color: colorError },
        ]}
      >
        {error}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textColorWhite: {
    color: colorPuplic.white,
  },
  inputText: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
    paddingLeft: 10,
    width: "100%",
  },
  container: {
    width: "100%",
    marginTop: 16,
  },
});

export default InputTextCustom;

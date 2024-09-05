import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";

const InputTextCustom = ({
  title,
  placeHolder,
  colorError,
  data,
  setData,
  acctionSubmit,
  error,
  isNeccessary,
  keyboardType
}: {
  title: string;
  placeHolder: string;
  colorError: string;
  data: string;
  setData: (value: string) => void;
  acctionSubmit: () => void;
  error: string;
  isNeccessary: boolean;
  keyboardType: 'default' | 'phone-pad'
}) => {
  return (
    <View style={styles.container}>
      <Text style={[stylesTextPuplic.text14regular, styles.textColorWhite]}>
        {title}
        {isNeccessary && <Text style={{ color: colorError }}>*</Text>}
      </Text>
      <TextInput
        placeholderTextColor={colorPuplic.grey}
        placeholder={placeHolder}
        value={data}
        keyboardType={keyboardType}
        onChangeText={setData}
        onBlur={acctionSubmit}
        style={[
          stylesTextPuplic.text14regular,
          styles.inputText,
          { borderColor: error ? colorError : "transparent" },
        ]}
        
      />
      {error && (
        <Text style={[stylesTextPuplic.text12regular, { color: colorError }]}>
          {error}
        </Text>
      )}
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

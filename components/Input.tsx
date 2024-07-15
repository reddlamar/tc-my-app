import {
  StyleSheet,
  Text,
  TextInput,
  type TextInputProps,
  View,
} from "react-native";
import React from "react";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";

type InputProps = TextInputProps & {
  label: string;
  hidePassword?: boolean;
  value: string;
  onChangeText: (text: string) => void;
};

const Input = ({
  label,
  hidePassword,
  value,
  onChangeText,
  ...rest
}: InputProps) => {
  return (
    <View style={styles.view}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={hidePassword}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
  },
  label: {
    fontSize: moderateScale(16),
    fontWeight: "400",
  },
  input: {
    width: scale(337),
    height: verticalScale(39),
    borderRadius: moderateScale(3),
    borderWidth: moderateScale(1),
    borderColor: "#000",
    paddingHorizontal: moderateScale(6),
  },
});

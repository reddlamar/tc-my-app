import React from "react";
import { StyleSheet, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import RequiredInput from "./RequiredInput";

import {
  ConfirmPasswordInputProps,
  PasswordInputProps,
} from "@/types/PropsTypes";

const ConfirmPasswordInput = ({
  confirmPassword,
  hidePassword,
  onChangeConfirmPassword,
  onPressHidePassword,
}: ConfirmPasswordInputProps) => {
  const showConfirmPasswordInput =
    confirmPassword !== undefined && onChangeConfirmPassword !== undefined;

  if (showConfirmPasswordInput) {
    return (
      <View style={styles.passwordView}>
        <RequiredInput
          label="Confirm Password"
          hidePassword={hidePassword}
          value={confirmPassword}
          onChangeText={onChangeConfirmPassword}
          isValid={false}
        />
        {hidePassword ? (
          <Ionicons
            name="eye-off"
            size={moderateScale(24)}
            color="black"
            style={styles.eye}
            onPress={() => onPressHidePassword(!hidePassword)}
          />
        ) : (
          <Ionicons
            name="eye"
            size={moderateScale(24)}
            color="black"
            style={styles.eye}
            onPress={() => onPressHidePassword(!hidePassword)}
          />
        )}
      </View>
    );
  }
};

const PasswordInput = (props: PasswordInputProps) => {
  const {
    password,
    onChangePassword,
    passwordLabel,
    confirmPassword,
    onChangeConfirmPassword,
    hidePassword,
    onPressHidePassword,
  } = props;

  return (
    <>
      <View style={styles.passwordView}>
        <RequiredInput
          label={passwordLabel ?? "Password"}
          hidePassword={hidePassword}
          value={password}
          onChangeText={onChangePassword}
          isValid={false}
        />
        {hidePassword ? (
          <Ionicons
            name="eye-off"
            size={moderateScale(24)}
            color="black"
            style={styles.eye}
            onPress={() => onPressHidePassword(!hidePassword)}
          />
        ) : (
          <Ionicons
            name="eye"
            size={moderateScale(24)}
            color="black"
            style={styles.eye}
            onPress={() => onPressHidePassword(!hidePassword)}
          />
        )}
      </View>
      <ConfirmPasswordInput
        confirmPassword={confirmPassword}
        hidePassword={hidePassword}
        onChangeConfirmPassword={onChangeConfirmPassword}
        onPressHidePassword={onPressHidePassword}
      />
    </>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  passwordView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  eye: {
    position: "absolute",
    right: scale(9),
    top: verticalScale(25),
  },
});

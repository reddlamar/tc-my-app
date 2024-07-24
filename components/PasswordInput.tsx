import { StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import Input from "./Input";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { PasswordProps } from "@/types/PropsTypes";

const PasswordInput = (props: PasswordProps) => {
  const {
    password,
    onChangePassword,
    passwordLabel,
    confirmPassword,
    onChangeConfirmPassword,
    hidePassword,
    onPressHidePassword,
  } = props;

  const renderConfirmPasswordContent = useCallback(() => {
    if (
      confirmPassword !== undefined &&
      onChangeConfirmPassword !== undefined
    ) {
      return (
        <View style={styles.passwordView}>
          <Input
            label="Confirm Password"
            hidePassword={hidePassword}
            value={confirmPassword}
            onChangeText={onChangeConfirmPassword}
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
  }, [confirmPassword]);

  return (
    <>
      <View style={styles.passwordView}>
        <Input
          label={passwordLabel ?? "Password"}
          hidePassword={hidePassword}
          value={password}
          onChangeText={onChangePassword}
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
      {renderConfirmPasswordContent()}
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

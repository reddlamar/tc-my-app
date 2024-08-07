import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Container from "@/components/Container";
import LinkButton from "@/components/LinkButton";
import PasswordInput from "@/components/PasswordInput";
import { ThemedText } from "@/components/ThemedText";

import { usePassword } from "@/hooks/usePassword";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

const ResetPassword = () => {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    hidePassword,
    setHidePassword,
  } = usePassword();

  return (
    <Container style={styles.container}>
      <View
        style={{ justifyContent: "center", alignItems: "center", rowGap: 9 }}
      >
        <ThemedText type="title">Reset Password</ThemedText>
        <ThemedText type="subtitle">
          <Text style={{ textAlign: "center", fontSize: 12, fontWeight: 400 }}>
            At least 9 characters with uppercase and lowercase letters
          </Text>
        </ThemedText>
      </View>
      <PasswordInput
        password={password}
        onChangePassword={setPassword}
        passwordLabel="New Password"
        confirmPassword={confirmPassword}
        onChangeConfirmPassword={setConfirmPassword}
        hidePassword={hidePassword}
        onPressHidePassword={setHidePassword}
      />
      <LinkButton href="/reset-password-success">
        <Text style={styles.text}>Done</Text>
      </LinkButton>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: moderateVerticalScale(60),
    alignItems: "center",
    marginTop: moderateVerticalScale(18),
  },
  text: {
    color: "#fff",
    fontSize: moderateScale(20),
    fontWeight: 600,
    lineHeight: moderateVerticalScale(25.2),
    textAlign: "center",
  },
});

export default ResetPassword;

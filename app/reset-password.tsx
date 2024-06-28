import { Text, View, StyleSheet } from "react-native";
import React from "react";
import Container from "@/components/Container";
import PasswordInput from "@/components/PasswordInput";
import Button from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { usePassword } from "@/hooks/usePassword";
import { Link } from "expo-router";

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
      <Button>
        <Link href="/reset-password-success">
          <Text style={styles.text}>Done</Text>
        </Link>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 60,
    alignItems: "center",
    marginTop: 18,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 25.2,
    textAlign: "center",
  },
});

export default ResetPassword;

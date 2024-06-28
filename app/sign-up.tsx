import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Container from "@/components/Container";
import Register from "@/components/Register";
import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";

const SignUp = () => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  return (
    <Container style={styles.view}>
      <Register
        // registerTitle="Sign Up"
        registerSubTitle="Create an account to begin your Learning Journey"
        registerText="SIGN UP"
        orRegisterText="Sign Up"
        socialRegisterText="Sign Up"
        registerQuestionText="Already"
        registerHereText="Sign in"
        registerHereHref="/sign-in"
        children={
          <View style={styles.inputView}>
            <Input
              label="Full Name"
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="none"
            />
            <Input
              label="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
            <PasswordInput
              password={password}
              onChangePassword={setPassword}
              confirmPassword={confirmPassword}
              onChangeConfirmPassword={setConfirmPassword}
              hidePassword={hidePassword}
              onPressHidePassword={setHidePassword}
            />
          </View>
        }
      />
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  view: {
    rowGap: 9,
  },
  inputView: {
    rowGap: 12,
  },
  passwordView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  eye: { position: "absolute", right: 9, top: 29 },
  forgetPasswordText: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 15.12,
    color: "#8E8787",
    alignSelf: "flex-end",
  },
});

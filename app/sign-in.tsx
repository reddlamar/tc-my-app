import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Container from "@/components/Container";
import Input from "@/components/Input";
import Register from "@/components/Register";
import PasswordInput from "@/components/PasswordInput";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

const SignIn = () => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Container style={styles.view}>
      <Register
        registerSubTitle="Please Sign in with your account"
        registerText="SIGN IN"
        orRegisterText="Sign in"
        socialRegisterText="Sign In"
        registerQuestionText="Didn't"
        registerHereText="Sign up"
        registerHereHref="/sign-up"
        children={
          <View style={styles.inputView}>
            <Input
              label="Email Here"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
            <PasswordInput
              password={password}
              onChangePassword={setPassword}
              hidePassword={hidePassword}
              onPressHidePassword={setHidePassword}
            />
            <Link
              href="/reset-password"
              style={{
                alignSelf: "flex-end",
              }}
            >
              <Text style={styles.forgetPasswordText}>Forget Password?</Text>
            </Link>
          </View>
        }
      />
    </Container>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  view: {
    justifyContent: "flex-start",
    alignItems: "center",
    rowGap: 9,
  },
  titleView: {
    alignItems: "center",
  },
  title: { color: Colors.light.text, marginTop: 12 },
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
  },
  socialSignInView: { rowGap: 24 },
  horizontalRule: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    height: 1,
    width: "50%",
  },
  button: { width: 300 },
  facebookButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#087BEA",
    paddingHorizontal: 12,
  },
  socialButtonText: { fontSize: 15, width: "auto", marginLeft: 9 },
  googleImage: { width: 24, height: 24 },
  googleButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  googleButtonText: { color: "#000" },
  buttonText: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 25.2,
    textAlign: "center",
    color: "#fff",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

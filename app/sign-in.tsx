import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import Container from "@/components/Container";
import Input from "@/components/Input";
import Register from "@/components/Register";
import PasswordInput from "@/components/PasswordInput";
import { Colors } from "@/constants/Colors";

const SignIn = () => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Container style={styles.view}>
      <Register
        registerTitle="Sign in"
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
    rowGap: moderateScale(9),
  },
  titleView: {
    alignItems: "center",
  },
  title: {
    color: Colors.light.text,
    marginTop: moderateScale(12),
  },
  inputView: {
    rowGap: moderateScale(12),
  },
  passwordView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  eye: {
    position: "absolute",
    right: scale(9),
    top: verticalScale(29),
  },
  forgetPasswordText: {
    fontSize: moderateScale(12),
    fontWeight: 500,
    lineHeight: scale(15.12),
    color: "#8E8787",
  },
  socialSignInView: {
    rowGap: moderateScale(24),
  },
  horizontalRule: {
    borderBottomColor: "#000",
    borderBottomWidth: moderateScale(1),
    height: verticalScale(1),
    width: "50%",
  },
  button: { width: scale(300) },
  facebookButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#087BEA",
    paddingHorizontal: moderateScale(12),
  },
  socialButtonText: {
    fontSize: moderateScale(15),
    width: "auto",
    marginLeft: moderateScale(9),
  },
  googleImage: {
    width: scale(24),
    height: verticalScale(24),
  },
  googleButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: moderateScale(3),
    borderWidth: moderateScale(1),
    borderColor: "#D9D9D9",
  },
  googleButtonText: { color: "#000" },
  buttonText: {
    fontSize: moderateScale(20),
    fontWeight: "400",
    lineHeight: verticalScale(25.2),
    textAlign: "center",
    color: "#fff",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

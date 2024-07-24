import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";
import Register from "@/components/Register";
import RequiredInput from "@/components/RequiredInput";
import PasswordInput from "@/components/PasswordInput";

const SignUp = () => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  return (
    <ScrollView contentContainerStyle={styles.view}>
      <Register
        registerTitle="Sign Up"
        registerSubTitle="Create an account to begin your Learning Journey"
        registerText="SIGN UP"
        orRegisterText="Sign Up"
        socialRegisterText="Sign Up"
        registerQuestionText="Already"
        registerHereText="Sign in"
        registerHereHref="/sign-in"
        children={
          <View style={styles.inputView}>
            <RequiredInput
              label="Full Name"
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="none"
              isValid={false}
            />
            <RequiredInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              isValid={false}
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
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  view: {
    rowGap: moderateScale(9),
    alignItems: "center",
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
    right: moderateScale(9),
    top: verticalScale(29),
  },
  forgetPasswordText: {
    fontSize: moderateScale(12),
    fontWeight: 500,
    lineHeight: verticalScale(15.12),
    color: "#8E8787",
    alignSelf: "flex-end",
  },
});

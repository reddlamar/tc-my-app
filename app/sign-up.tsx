import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { moderateScale, verticalScale } from "react-native-size-matters";
import { Controller } from "react-hook-form";

import { useSignUpForm } from "@/hooks/useSignUpForm";

import Register from "@/components/Register";
import RequiredInput from "@/components/RequiredInput";

const SignUp = () => {
  const { control, handleSubmit, errors } = useSignUpForm();

  const onSubmit = handleSubmit((data) => console.log("data", data));

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
        onSubmit={() => {
          console.log("submit button pressed");
          onSubmit();
        }}
      >
        <View style={styles.inputView}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <RequiredInput
                label="Full Name"
                value={value}
                autoCapitalize="none"
                isValid={errors.fullName}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="fullName"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <RequiredInput
                label="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                autoCapitalize="none"
                value={value}
                isValid={errors.email}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <RequiredInput
                label="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                autoCapitalize="none"
                value={value}
                isValid={errors.password}
              />
            )}
            name="password"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <RequiredInput
                label="Confirm Password"
                onBlur={onBlur}
                onChangeText={onChange}
                autoCapitalize="none"
                value={value}
                isValid={errors.confirmPassword}
              />
            )}
            name="confirmPassword"
          />
        </View>
      </Register>
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

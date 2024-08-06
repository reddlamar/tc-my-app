import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { moderateScale, verticalScale } from "react-native-size-matters";
import { Controller } from "react-hook-form";

import { useSignUpForm } from "@/hooks/useSignUpForm";

import Register from "@/components/Register";
import RequiredInput from "@/components/RequiredInput";
import { emailRegEx, fullNameRegEx } from "@/constants/Regex";

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
              pattern: fullNameRegEx,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <RequiredInput
                label="Full Name"
                value={value}
                autoCapitalize="words"
                isInvalid={errors.fullName}
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
              pattern: emailRegEx,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <RequiredInput
                label="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                autoCapitalize="none"
                value={value}
                isInvalid={errors.email}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: true,
              minLength: 6,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <RequiredInput
                label="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                autoCapitalize="none"
                value={value}
                isInvalid={errors.password}
              />
            )}
            name="password"
          />
          <Controller
            control={control}
            rules={{
              required: true,
              validate: (value, formValues) => value === formValues.password,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <RequiredInput
                label="Confirm Password"
                onBlur={onBlur}
                onChangeText={onChange}
                autoCapitalize="none"
                value={value}
                isInvalid={errors.confirmPassword}
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

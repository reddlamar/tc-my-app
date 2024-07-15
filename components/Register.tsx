import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { FontAwesome5 } from "@expo/vector-icons";
import PrimaryButton from "./PrimaryButton";
import LinkButton from "./LinkButton";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";
import { baseWidth, windowWidth } from "@/constants/WindowDimensions";
import Container from "./Container";

type RegisterProps = {
  registerTitle?: string;
  registerSubTitle: string;
  registerText: string;
  socialRegisterText: string;
  orRegisterText: string;
  registerQuestionText: string;
  registerHereText: string;
  children: React.ReactNode;
  registerHereHref: string;
};

const Register = (props: RegisterProps) => {
  const {
    registerTitle,
    registerSubTitle,
    registerText,
    socialRegisterText,
    orRegisterText,
    registerQuestionText,
    registerHereText,
    children,
    registerHereHref,
  } = props;
  return (
    <Container style={styles.view}>
      <View style={styles.titleView}>
        {registerTitle && (
          <ThemedText
            lightColor="#fff"
            darkColor="#000"
            type="title"
            style={styles.title}
          >
            {registerTitle}
          </ThemedText>
        )}
        <ThemedText lightColor="#fff" darkColor="#000" style={styles.title}>
          {registerSubTitle}
        </ThemedText>
      </View>
      {children}
      <View>
        <LinkButton style={styles.button} href={"/(tabs)"}>
          <Text style={styles.buttonText}>{registerText}</Text>
        </LinkButton>
      </View>
      <View style={styles.dividerView}>
        <View style={styles.horizontalRule}></View>
        <Text style={styles.dividerText}>{`Or ${orRegisterText} with`}</Text>
        <View style={styles.horizontalRule}></View>
      </View>
      <View style={styles.socialSignInView}>
        <PrimaryButton
          onPress={() => {}}
          style={{
            ...styles.facebookButton,
            ...styles.button,
          }}
        >
          <FontAwesome5
            name="facebook-f"
            size={moderateScale(24)}
            color="white"
          />
          <Text style={[styles.buttonText, styles.socialButtonText]}>
            {`${socialRegisterText} with Facebook`}
          </Text>
        </PrimaryButton>
        <PrimaryButton
          onPress={() => {}}
          style={{
            ...styles.button,
            ...styles.googleButton,
          }}
        >
          <Image
            source={require("../assets/images/google.png")}
            resizeMode="contain"
            style={styles.googleImage}
          />
          <Text
            style={{
              ...styles.buttonText,
              ...styles.googleButtonText,
              ...styles.socialButtonText,
            }}
          >
            {`${socialRegisterText} with Google`}
          </Text>
        </PrimaryButton>
        <View style={styles.registerHereView}>
          <Text
            style={styles.registerHereText}
          >{`${registerQuestionText} have an account?`}</Text>
          <Link href={registerHereHref}>
            <Text
              style={styles.registerHereText}
            >{`${registerHereText} Here`}</Text>
          </Link>
        </View>
      </View>
    </Container>
  );
};

export default Register;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    rowGap: moderateScale(7),
    justifyContent: windowWidth > baseWidth ? "center" : "flex-start",
  },
  socialSignInView: {
    rowGap: moderateScale(21),
  },
  titleView: {
    alignItems: "center",
  },
  title: {
    color: Colors.light.text,
    marginTop: moderateScale(9),
  },
  horizontalRule: {
    borderBottomColor: "#000",
    borderBottomWidth: moderateScale(1),
    height: verticalScale(1),
    width: "50%",
  },
  dividerView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: moderateScale(3),
    marginHorizontal: moderateScale(90),
  },
  dividerText: { textAlign: "center" },
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
    lineHeight: moderateScale(25.2),
    textAlign: "center",
    color: "#fff",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  registerHereView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: moderateScale(18),
  },
  registerHereText: {
    fontSize: moderateScale(15),
  },
});

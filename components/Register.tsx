import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import PrimaryButton from "./PrimaryButton";
import ButtonLink from "./ButtonLink";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

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
    <>
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
        <ButtonLink style={styles.button} href={"/(tabs)"}>
          <Text style={styles.buttonText}>{registerText}</Text>
        </ButtonLink>
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
          <FontAwesome5 name="facebook-f" size={24} color="white" />
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
          <Text>{`${registerQuestionText} have an account?`}</Text>
          <Link href={registerHereHref}>
            <Text>{`${registerHereText} Here`}</Text>
          </Link>
        </View>
      </View>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    rowGap: 9,
  },
  socialSignInView: { rowGap: 24 },
  titleView: {
    alignItems: "center",
  },
  title: { color: Colors.light.text, marginTop: 12 },
  horizontalRule: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    height: 1,
    width: "50%",
  },
  dividerView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 3,
    marginHorizontal: 90,
  },
  dividerText: { textAlign: "center" },
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
  registerHereView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

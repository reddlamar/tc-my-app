import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import Container from "@/components/Container";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import PrimaryButton from "../components/PrimaryButton";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

const ResetPasswordSuccess = () => {
  return (
    <Container style={styles.container}>
      <Image
        source={require("../assets/images/checkmark.png")}
        style={styles.image}
      />
      <ThemedText type="subtitle">
        <Text style={{ textAlign: "center" }}>
          Your Password has been updated Successfully!
        </Text>
      </ThemedText>
      <View style={styles.successExtraTextView}>
        <Text style={styles.successText}>Transaction Successfully!</Text>
        <Text style={styles.successTextSmall}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
      </View>
      <PrimaryButton style={styles.button} onPress={() => {}}>
        <Link href="/reset-password-success">
          <Text style={styles.text}>Done</Text>
        </Link>
      </PrimaryButton>
    </Container>
  );
};

export default ResetPasswordSuccess;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    rowGap: moderateVerticalScale(12),
    backgroundColor: "#fff",
  },
  image: {
    width: moderateScale(300),
    height: moderateVerticalScale(300),
  },
  text: {
    color: "#fff",
    fontSize: moderateScale(20),
    fontWeight: "600",
    lineHeight: moderateVerticalScale(25.2),
    textAlign: "center",
  },
  successExtraTextView: {
    backgroundColor: "#E5EAF4",
    width: moderateScale(336),
    height: moderateVerticalScale(62),
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: "#C6C6C6",
    padding: moderateScale(12),
    justifyContent: "center",
    alignItems: "center",
  },
  successText: {
    fontSize: moderateScale(14),
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },
  successTextSmall: {
    fontSize: moderateScale(10),
    fontWeight: "300",
    color: "#8E8787",
  },
  button: {
    width: moderateScale(334),
    height: moderateVerticalScale(57),
    borderRadius: moderateScale(10),
    marginTop: moderateVerticalScale(30),
  },
});

import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import Container from "@/components/Container";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import PrimaryButton from "../components/PrimaryButton";
import { horizontalScale, verticalScale } from "@/constants/WindowDimensions";

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
    rowGap: verticalScale(12),
    backgroundColor: "#fff",
  },
  image: {
    width: horizontalScale(300),
    height: verticalScale(300),
  },
  text: {
    color: "#fff",
    fontSize: horizontalScale(20),
    fontWeight: "600",
    lineHeight: verticalScale(25.2),
    textAlign: "center",
  },
  successExtraTextView: {
    backgroundColor: "#E5EAF4",
    width: horizontalScale(336),
    height: verticalScale(62),
    borderRadius: horizontalScale(10),
    borderWidth: horizontalScale(1),
    borderColor: "#C6C6C6",
    padding: horizontalScale(12),
    justifyContent: "center",
    alignItems: "center",
  },
  successText: {
    fontSize: horizontalScale(14),
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },
  successTextSmall: {
    fontSize: horizontalScale(10),
    fontWeight: "300",
    color: "#8E8787",
  },
  button: {
    width: horizontalScale(334),
    height: verticalScale(57),
    borderRadius: horizontalScale(10),
    marginTop: verticalScale(30),
  },
});

import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import Container from "@/components/Container";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import PrimaryButton from "../components/PrimaryButton";

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
    rowGap: 12,
    backgroundColor: "#fff",
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 25.2,
    textAlign: "center",
  },
  successExtraTextView: {
    backgroundColor: "#E5EAF4",
    width: 336,
    height: 62,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C6C6C6",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  successText: {
    fontSize: 14,
    fontWeight: 600,
    color: "#000",
    textAlign: "center",
  },
  successTextSmall: {
    fontSize: 10,
    fontWeight: 300,
    color: "#8E8787",
  },
  button: {
    width: 334,
    height: 57,
    borderRadius: 10,
    marginTop: 30,
  },
});

import { StyleSheet, Text } from "react-native";
import React from "react";
import Container from "./Container";
import { ErrorMessageProps } from "@/types/PropsTypes";
import { moderateScale } from "react-native-size-matters";

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <Container style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </Container>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  text: { fontSize: moderateScale(18) },
});

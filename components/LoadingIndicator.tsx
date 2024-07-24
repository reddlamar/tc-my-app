import React from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";

import Container from "./Container";

import { Colors } from "@/constants/Colors";
import { moderateScale } from "react-native-size-matters";

import { LoadingIndicatorProps } from "@/types/PropsTypes";

const LoadingIndicator = ({ text = "", size = 24 }: LoadingIndicatorProps) => {
  return (
    <Container style={styles.container}>
      <ActivityIndicator color={Colors.light.tint} size={moderateScale(size)} />
      <Text>{text}</Text>
    </Container>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
});

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaViewProps } from "react-native-safe-area-context";

const Container = ({ children, style }: SafeAreaViewProps) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

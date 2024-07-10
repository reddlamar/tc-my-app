import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";

type ChipProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const Chip = ({ children, style }: ChipProps) => {
  return <View style={[styles.view, style]}>{children}</View>;
};

export default Chip;

const styles = StyleSheet.create({
  view: {
    borderWidth: 1,
    borderColor: "#E3E3E3",
    borderRadius: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 3,
    alignItems: "center",
  },
});

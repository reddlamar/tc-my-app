import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { horizontalScale, verticalScale } from "@/constants/WindowDimensions";

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
    borderWidth: horizontalScale(1),
    borderColor: "#E3E3E3",
    borderRadius: horizontalScale(20),
    backgroundColor: "#fff",
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(3),
    alignItems: "center",
  },
});

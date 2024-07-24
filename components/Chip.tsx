import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { ChipProps } from "@/types/PropsTypes";

const Chip = ({ children, style }: ChipProps) => {
  return <View style={[styles.view, style]}>{children}</View>;
};

export default Chip;

const styles = StyleSheet.create({
  view: {
    borderWidth: moderateScale(1),
    borderColor: "#E3E3E3",
    borderRadius: moderateScale(20),
    backgroundColor: "#fff",
    paddingHorizontal: moderateScale(18),
    paddingVertical: moderateVerticalScale(3),
    alignItems: "center",
  },
});

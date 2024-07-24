import { StyleSheet, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { ButtonLinkProps } from "@/types/PropsTypes";
import { horizontalScale, verticalScale } from "@/constants/WindowDimensions";

const LinkButton = ({ href, style, children }: ButtonLinkProps) => {
  return (
    <View style={[styles.view, style]}>
      <Link href={href}>{children}</Link>
    </View>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  view: {
    width: horizontalScale(221),
    height: verticalScale(57),
    borderRadius: horizontalScale(10),
    backgroundColor: "#003096",
    justifyContent: "center",
    alignItems: "center",
  },
});

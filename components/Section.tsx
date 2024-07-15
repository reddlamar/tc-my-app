import { StyleSheet, View } from "react-native";
import React from "react";
import { SectionProps } from "@/types/PropsType";
import { horizontalScale, verticalScale } from "@/constants/WindowDimensions";

const Section = ({ children, style, ...props }: SectionProps) => {
  return (
    <View style={[styles.view, style]} {...props}>
      {children}
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  view: {
    width: horizontalScale(338),
    height: "auto",
    borderWidth: horizontalScale(1),
    borderRadius: horizontalScale(10),
    borderColor: "#D9D9D9",
    backgroundColor: "#0030961A",
    paddingVertical: verticalScale(18),
  },
});

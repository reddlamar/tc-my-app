import { StyleSheet, View } from "react-native";
import React from "react";
import { SectionProps } from "@/types/PropsType";

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
    width: 338,
    height: "auto",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#D9D9D9",
    backgroundColor: "#0030961A",
    // justifyContent: "center",
    // alignItems: "center",
    paddingVertical: 18,
  },
});

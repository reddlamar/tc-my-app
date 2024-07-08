import { StyleSheet, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { ButtonLinkProps } from "@/types/PropsType";

const ButtonLink = ({ href, style, children }: ButtonLinkProps) => {
  return (
    <View style={[styles.view, style]}>
      <Link href={href}>{children}</Link>
    </View>
  );
};

export default ButtonLink;

const styles = StyleSheet.create({
  view: {
    width: 221,
    height: 57,
    borderRadius: 10,
    backgroundColor: "#003096",
    justifyContent: "center",
    alignItems: "center",
  },
});

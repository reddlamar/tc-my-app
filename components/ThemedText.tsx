import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

import { moderateScale, verticalScale } from "react-native-size-matters";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: moderateScale(16),
    lineHeight: verticalScale(24),
  },
  defaultSemiBold: {
    fontSize: moderateScale(16),
    lineHeight: verticalScale(24),
    fontWeight: "600",
  },
  title: {
    fontSize: moderateScale(32),
    lineHeight: verticalScale(32),
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
  },
  link: {
    fontSize: moderateScale(16),
    lineHeight: verticalScale(30),
    color: "#0a7ea4",
  },
});

import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { CustomButtonProps } from "@/types/PropsTypes";

const PrimaryButton = ({
  onPress,
  children,
  style,
  ...props
}: CustomButtonProps) => {
  const handleOnPress = useCallback(
    (e: GestureResponderEvent) => {
      onPress(e);
    },
    [onPress]
  );

  return (
    <Pressable
      onPress={(e) => handleOnPress(e)}
      style={[styles.button, style]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    width: scale(221),
    height: verticalScale(57),
    borderRadius: moderateScale(10),
    backgroundColor: "#003096",
    justifyContent: "center",
    alignItems: "center",
  },
});

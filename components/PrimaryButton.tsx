import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import { CustomButtonProps } from "@/types/PropsType";

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
    width: 221,
    height: 57,
    borderRadius: 10,
    backgroundColor: "#003096",
    justifyContent: "center",
    alignItems: "center",
  },
});

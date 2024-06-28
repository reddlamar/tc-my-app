import { Pressable, type PressableProps, StyleSheet } from "react-native";
import React from "react";
import { StyleProps } from "react-native-reanimated";

type ButtonProps = PressableProps & {
  buttonStyle?: StyleProps;
  onPress?: () => void;
};

const Button = ({ buttonStyle, onPress, children, ...props }: ButtonProps) => {
  const handleOnPress = () => {};

  return (
    <Pressable
      onPress={onPress ?? handleOnPress}
      style={[styles.button, buttonStyle]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default Button;

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

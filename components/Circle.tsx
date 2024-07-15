import { StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { horizontalScale } from "@/constants/WindowDimensions";

type CircleProps = {
  size?: number;
  color?: string;
};

const Circle = ({
  size = horizontalScale(24),
  color = "black",
}: CircleProps) => {
  return <FontAwesome name="circle" size={size} color={color} />;
};

export default Circle;

const styles = StyleSheet.create({});

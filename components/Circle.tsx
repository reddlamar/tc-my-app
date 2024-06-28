import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

type CircleProps = {
  size?: number;
  color?: string;
};

const Circle = ({ size = 24, color = "black" }: CircleProps) => {
  return <FontAwesome name="circle" size={size} color={color} />;
};

export default Circle;

const styles = StyleSheet.create({});

import { StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";
import { CircleProps } from "@/types/PropsTypes";

const Circle = ({ size = moderateScale(24), color = "black" }: CircleProps) => {
  return <FontAwesome name="circle" size={size} color={color} />;
};

export default Circle;

const styles = StyleSheet.create({});

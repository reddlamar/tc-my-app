import { StyleSheet, Text } from "react-native";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import { useNavigation } from "expo-router";
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types";
import { horizontalScale, verticalScale } from "@/constants/WindowDimensions";

const EnrollButton = () => {
  const navigation = useNavigation<NativeStackNavigatorProps>();

  const handlePress = () => {
    navigation.navigate("payment");
  };

  return (
    <PrimaryButton style={styles.buttonStyle} onPress={handlePress}>
      <Text style={styles.buttonText}>Enroll Now</Text>
    </PrimaryButton>
  );
};

export default EnrollButton;

const styles = StyleSheet.create({
  buttonStyle: {
    width: horizontalScale(336),
    height: verticalScale(40),
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: verticalScale(9),
    paddingHorizontal: horizontalScale(9),
  },
  buttonText: {
    color: "#fff",
    fontSize: horizontalScale(20),
    lineHeight: verticalScale(25.2),
    textAlign: "center",
  },
});

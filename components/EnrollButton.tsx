import { StyleSheet, Text } from "react-native";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import { useNavigation } from "expo-router";
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

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
    width: moderateScale(336),
    height: moderateVerticalScale(40),
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: moderateVerticalScale(9),
    paddingHorizontal: moderateScale(9),
  },
  buttonText: {
    color: "#fff",
    fontSize: moderateScale(20),
    lineHeight: moderateVerticalScale(25.2),
    textAlign: "center",
  },
});

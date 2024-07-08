import { StyleSheet, Text } from "react-native";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import { useNavigation } from "expo-router";
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types";

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
    width: 336,
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 9,
    paddingHorizontal: 9,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 25.2,
    textAlign: "center",
  },
});

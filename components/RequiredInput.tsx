import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";
import { InputProps } from "@/types/PropsTypes";

type RequiredInputProps = InputProps & {
  isValid: boolean;
};

const RequiredInput = ({
  label,
  value,
  onChangeText,
  isValid,
}: RequiredInputProps) => {
  return (
    <View>
      <Input
        label={label}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
      />
      {!isValid && (
        <Text style={{ color: "tomato", fontSize: 12 }}>Required Field</Text>
      )}
    </View>
  );
};

export default RequiredInput;

const styles = StyleSheet.create({});

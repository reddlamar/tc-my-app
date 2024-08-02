import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";
import { InputProps } from "@/types/PropsTypes";
import { FieldError } from "react-hook-form";

type RequiredInputProps = InputProps & {
  isValid: FieldError | undefined;
};

const RequiredInput = ({
  label,
  value,
  onChangeText,
  isValid,
  ...rest
}: RequiredInputProps) => {
  return (
    <View>
      <Input
        label={label}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        {...rest}
      />
      {isValid && (
        <Text style={{ color: "tomato", fontSize: 12 }}>Required Field</Text>
      )}
    </View>
  );
};

export default RequiredInput;

const styles = StyleSheet.create({});

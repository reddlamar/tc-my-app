import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";
import { InputProps } from "@/types/PropsTypes";
import { FieldError } from "react-hook-form";

type RequiredInputProps = InputProps & {
  isInvalid: FieldError | undefined;
};

const getErrorMessage = (invalidType: string) => {
  switch (invalidType) {
    case "pattern":
    case "minLength":
    case "validate":
      return "Invalid Field";
    case "required":
      return "Required Field";
    default:
      return "Field Error";
  }
};

const RequiredInput = ({
  label,
  value,
  onChangeText,
  isInvalid,
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
      {isInvalid && (
        <Text style={styles.errorText}>{getErrorMessage(isInvalid.type)}</Text>
      )}
    </View>
  );
};

export default RequiredInput;

const styles = StyleSheet.create({
  errorText: { color: "tomato", fontSize: 12 },
});

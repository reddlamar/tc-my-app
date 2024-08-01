import { StyleSheet, Text } from "react-native";
import React from "react";

import LinkButton from "./LinkButton";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

const EnrollButton = ({ course }: any) => {
  return (
    <LinkButton href={`/payment/${course.id}`} style={styles.buttonStyle}>
      <Text style={styles.buttonText}>Enroll Now</Text>
    </LinkButton>
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

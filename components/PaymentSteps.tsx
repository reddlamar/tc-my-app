import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Section from "./Section";
import { horizontalScale, verticalScale } from "@/constants/WindowDimensions";
import { PaymentStepsProps } from "@/types/PropsTypes";

const PaymentSteps = (props: PaymentStepsProps) => {
  const { activeStep1, activeStep2, activeStep3 } = props;
  const { onPressCircle1, onPressCircle2, onPressCircle3 } = props;
  const circleSize = horizontalScale(50);

  return (
    <Section style={styles.section}>
      <View style={styles.circles}>
        <View style={styles.circle}>
          <Pressable
            onPress={(e) => onPressCircle1(e)}
            style={{ justifyContent: "center" }}
          >
            <FontAwesome
              name="circle"
              size={circleSize}
              color={activeStep1 ? "#06367E" : "#000"}
            />
            <Text style={styles.circleText}>1</Text>
          </Pressable>
        </View>
        <View style={styles.horizontalRule}></View>
        <View style={styles.circle}>
          <Pressable
            onPress={(e) => onPressCircle2(e)}
            style={styles.circlePressable}
          >
            <FontAwesome
              name="circle"
              size={circleSize}
              color={activeStep2 ? "#06367E" : "#000"}
            />
            <Text style={styles.circleText}>2</Text>
          </Pressable>
        </View>
        <View style={styles.horizontalRule}></View>
        <View style={styles.circle}>
          <Pressable
            onPress={(e) => onPressCircle3(e)}
            style={styles.circlePressable}
          >
            <FontAwesome
              name="circle"
              size={circleSize}
              color={activeStep3 ? "#06367E" : "#000"}
            />
            <Text style={styles.circleText}>3</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.paymentStepsContainer}>
        <Text style={styles.overviewText}>Overview</Text>
        <Text style={styles.paymentMethodText}>Payment Method</Text>
        <Text style={styles.confirmationText}>Confirmation</Text>
      </View>
    </Section>
  );
};

export default PaymentSteps;

const styles = StyleSheet.create({
  section: { marginTop: verticalScale(30), width: horizontalScale(352) },
  circles: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 1,
    marginHorizontal: horizontalScale(90),
    marginVertical: "auto",
    position: "relative",
    top: verticalScale(6),
    justifyContent: "center",
  },
  circle: { alignItems: "center" },
  circlePressable: {},
  circleText: {
    color: "white",
    position: "relative",
    left: horizontalScale(17),
    bottom: verticalScale(35),
    fontSize: horizontalScale(16),
    fontWeight: 600,
  },
  paymentStepsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "relative",
    bottom: verticalScale(9),
  },
  overviewText: {
    fontSize: horizontalScale(8),
    position: "relative",
    left: horizontalScale(8),
  },
  paymentMethodText: {
    fontSize: horizontalScale(8),
    position: "relative",
    left: horizontalScale(10),
  },
  confirmationText: {
    fontSize: horizontalScale(8),
    position: "relative",
    left: horizontalScale(3),
  },
  horizontalRule: {
    borderBottomColor: "#000",
    borderBottomWidth: horizontalScale(1),
    height: verticalScale(1),
    width: "35%",
    position: "relative",
    bottom: verticalScale(8),
  },
});

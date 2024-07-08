import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Section from "./Section";

type PaymentStepsProps = {
  activeStep1: boolean;
  activeStep2: boolean;
  activeStep3: boolean;
  onPressCircle1: (e: GestureResponderEvent) => void;
  onPressCircle2: (e: GestureResponderEvent) => void;
  onPressCircle3: (e: GestureResponderEvent) => void;
};

const PaymentSteps = (props: PaymentStepsProps) => {
  const { activeStep1, activeStep2, activeStep3 } = props;
  const { onPressCircle1, onPressCircle2, onPressCircle3 } = props;
  const circleSize = 50;

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
  section: { marginTop: 30 },
  circles: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 1,
    marginHorizontal: 90,
    marginVertical: "auto",
    position: "relative",
    top: 6,
    justifyContent: "center",
  },
  circle: { alignItems: "center" },
  circlePressable: {},
  circleText: {
    color: "white",
    position: "relative",
    left: 17,
    bottom: 35,
    fontSize: 16,
    fontWeight: 600,
  },
  paymentStepsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "relative",
    bottom: 9,
  },
  overviewText: { fontSize: 8, position: "relative", left: 8 },
  paymentMethodText: { fontSize: 8, position: "relative", left: 10 },
  confirmationText: { fontSize: 8, position: "relative", left: 3 },
  horizontalRule: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    height: 1,
    width: "35%",
    position: "relative",
    bottom: 8,
  },
});

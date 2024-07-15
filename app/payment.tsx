import {
  StyleSheet,
  Text,
  View,
  Image,
  GestureResponderEvent,
  ScrollView,
} from "react-native";
import React, { useCallback, useState } from "react";
import Container from "@/components/Container";
import PrimaryButton from "@/components/PrimaryButton";
import PaymentStep1 from "@/screens/PaymentStep1";
import PaymentStep2 from "@/screens/PaymentStep2";
import PaymentSteps from "@/components/PaymentSteps";
import { horizontalScale, verticalScale } from "@/constants/WindowDimensions";

const PaymentStep3 = () => {
  return (
    <View>
      <Text style={styles.transactionCompleteText}>Transaction Complete!</Text>
      <Image
        style={styles.image}
        source={require("../assets/images/transaction-complete.png")}
      />
    </View>
  );
};

const Payment = () => {
  const [activeCircle1, setActiveCircle1] = useState<boolean>(true);
  const [activeCircle2, setActiveCircle2] = useState<boolean>(false);
  const [activeCircle3, setActiveCircle3] = useState<boolean>(false);

  const handlePressCircle1 = useCallback((e: GestureResponderEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveCircle1(true);
    setActiveCircle2(false);
    setActiveCircle3(false);
  }, []);

  const handlePressCircle2 = useCallback((e: GestureResponderEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveCircle2(true);
    setActiveCircle1(false);
    setActiveCircle3(false);
  }, []);

  const handlePressCircle3 = useCallback((e: GestureResponderEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveCircle3(true);
    setActiveCircle1(false);
    setActiveCircle2(false);
  }, []);

  const activatePaymentStep2 = useCallback(() => {
    setActiveCircle2(true);
    setActiveCircle1(false);
    setActiveCircle3(false);
  }, []);

  const activatePaymentStep3 = useCallback(() => {
    setActiveCircle3(true);
    setActiveCircle1(false);
    setActiveCircle2(false);
  }, []);

  const handleButtonPress = useCallback(
    (e: GestureResponderEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (activeCircle1) {
        activatePaymentStep2();
      }
      if (activeCircle2) {
        activatePaymentStep3();
      }
    },
    [activeCircle1, activeCircle2]
  );

  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <PaymentSteps
          activeStep1={activeCircle1}
          activeStep2={activeCircle2}
          activeStep3={activeCircle3}
          onPressCircle1={handlePressCircle1}
          onPressCircle2={handlePressCircle2}
          onPressCircle3={handlePressCircle3}
        />
        {activeCircle1 && <PaymentStep1 />}
        {activeCircle2 && <PaymentStep2 />}
        {activeCircle3 && <PaymentStep3 />}
        <PrimaryButton
          style={styles.button}
          onPress={(e) => handleButtonPress(e)}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </PrimaryButton>
      </ScrollView>
    </Container>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    rowGap: verticalScale(21),
    paddingHorizontal: horizontalScale(9),
  },
  scrollContainer: {
    // height: "100%",
    paddingBottom: verticalScale(15),
    alignItems: "center",
    rowGap: verticalScale(9),
  },
  transactionCompleteText: {
    fontSize: horizontalScale(22),
    fontWeight: "600",
    lineHeight: verticalScale(27.72),
    textAlign: "center",
    color: "#000",
  },
  image: {
    width: horizontalScale(250),
    height: verticalScale(322),
    resizeMode: "contain",
  },
  button: {
    width: "90%",
    marginBottom: verticalScale(3),
    marginTop: verticalScale(24),
    position: "relative",
    bottom: 0,
  },
  buttonText: {
    color: "#fff",
    fontSize: horizontalScale(29),
    fontWeight: "600",
    textAlign: "center",
  },
});

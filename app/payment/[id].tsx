import {
  StyleSheet,
  Text,
  View,
  Image,
  GestureResponderEvent,
  ScrollView,
} from "react-native";
import React, { useCallback, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import Container from "@/components/Container";
import PrimaryButton from "@/components/PrimaryButton";
import PaymentStep1 from "@/screens/PaymentStep1";
import PaymentStep2 from "@/screens/PaymentStep2";
import PaymentSteps from "@/components/PaymentSteps";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { windowHeight, windowWidth } from "@/constants/WindowDimensions";
import { useAppSelector } from "@/hooks/useRedux";
import { selectCourseByID } from "@/features/redux/courses/coursesSlice";

const PaymentStep3 = () => {
  return (
    <View>
      <Text style={styles.transactionCompleteText}>Transaction Complete!</Text>
      <Image
        style={styles.image}
        source={require("@/assets/images/transaction-complete.png")}
      />
    </View>
  );
};

const Payment = () => {
  const { id } = useLocalSearchParams();
  const course = useAppSelector((state) => {
    if (typeof id === "string") {
      return selectCourseByID(state, id);
    }
    return null;
  });
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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Container style={styles.container}>
        <PaymentSteps
          activeStep1={activeCircle1}
          activeStep2={activeCircle2}
          activeStep3={activeCircle3}
          onPressCircle1={handlePressCircle1}
          onPressCircle2={handlePressCircle2}
          onPressCircle3={handlePressCircle3}
        />
        {activeCircle1 && <PaymentStep1 course={course} />}
        {activeCircle2 && <PaymentStep2 />}
        {activeCircle3 && <PaymentStep3 />}
        <PrimaryButton
          style={styles.button}
          onPress={(e) => handleButtonPress(e)}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </PrimaryButton>
      </Container>
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: moderateVerticalScale(15),
    alignItems: "center",
    rowGap: moderateVerticalScale(9),
    width: windowWidth,
    height: windowHeight,
  },
  container: {
    alignItems: "center",
    rowGap: moderateVerticalScale(21),
    paddingHorizontal: moderateScale(9),
    width: windowWidth,
    height: windowHeight,
  },
  transactionCompleteText: {
    fontSize: moderateScale(22),
    fontWeight: "600",
    lineHeight: moderateVerticalScale(27.72),
    textAlign: "center",
    color: "#000",
  },
  image: {
    width: moderateScale(250),
    height: moderateVerticalScale(322),
    resizeMode: "contain",
  },
  button: {
    marginBottom: moderateVerticalScale(3),
    marginTop: moderateVerticalScale(24),
    position: "relative",
    bottom: 0,
  },
  buttonText: {
    color: "#fff",
    fontSize: moderateScale(29),
    fontWeight: "600",
    textAlign: "center",
  },
});

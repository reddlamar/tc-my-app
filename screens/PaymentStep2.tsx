import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Section from "@/components/Section";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { horizontalScale, verticalScale } from "@/constants/WindowDimensions";

const PaymentOptions = ({ onPress }: any) => {
  const iconSize = horizontalScale(24);
  return (
    <>
      <Section style={styles.paymentSection}>
        <View style={styles.paymentView}>
          <AntDesign name="pluscircle" size={iconSize} color="black" />
          <Text style={styles.paymentText}>PayPal</Text>
        </View>
      </Section>
      <Section style={styles.paymentSection}>
        <Pressable onPress={onPress}>
          <View style={styles.paymentView}>
            <AntDesign name="pluscircle" size={iconSize} color="black" />
            <Text style={styles.paymentText}>Add Credit Card</Text>
          </View>
        </Pressable>
      </Section>
      <Section style={styles.paymentSection}>
        <View style={styles.paymentView}>
          <AntDesign name="pluscircle" size={iconSize} color="black" />
          <Text style={styles.paymentText}>Add Debit Card</Text>
        </View>
      </Section>
    </>
  );
};

const PaymentCard = () => {
  return (
    <>
      <TextInput
        placeholder="Name on Card"
        style={styles.cardPaymentTextInput}
      />
      <TextInput
        placeholder="Card Number"
        style={styles.cardPaymentTextInput}
        inputMode="numeric"
      />
      <View style={styles.extraCardPaymentDetailsView}>
        <TextInput
          placeholder="CVC Number"
          style={[styles.cardPaymentTextInput, styles.cardPaymentText2]}
        />
        <TextInput
          placeholder="Expiry Date"
          style={[styles.cardPaymentTextInput, styles.cardPaymentText2]}
        />
      </View>
    </>
  );
};

const PaymentStep2 = () => {
  const [showPaymentOptions, setShowPaymentOptions] = useState<boolean>(true);
  const [showCardPayment, setShowCardPayment] = useState<boolean>(false);

  const handlePress = () => {
    setShowCardPayment(!showCardPayment);
    setShowPaymentOptions(!showPaymentOptions);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.paymentStep2Title}>Select Payment Method</Text>
      {showPaymentOptions && <PaymentOptions onPress={handlePress} />}
      {showCardPayment && <PaymentCard />}
    </GestureHandlerRootView>
  );
};

export default PaymentStep2;

const styles = StyleSheet.create({
  container: { rowGap: verticalScale(18), marginBottom: verticalScale(45) },
  paymentStep2Title: {
    fontSize: horizontalScale(22),
    fontWeight: "600",
    lineHeight: verticalScale(27.72),
  },
  paymentSection: { paddingHorizontal: 12 },
  paymentView: {
    flexDirection: "row",
    columnGap: horizontalScale(9),
  },
  paymentText: {
    fontSize: horizontalScale(16),
    fontWeight: "500",
    lineHeight: verticalScale(20.16),
  },
  cardPaymentTextInput: {
    width: horizontalScale(352),
    height: verticalScale(68),
    backgroundColor: "#E5EAF4",
    paddingHorizontal: horizontalScale(9),
    borderColor: "#CDCDCD",
    borderRadius: horizontalScale(5),
  },
  cardPaymentText1: {
    fontSize: horizontalScale(18),
    fontWeight: 500,
    lineHeight: verticalScale(22.68),
    borderWidth: 1,
    borderColor: "#CDCDCD",
    borderRadius: horizontalScale(5),
  },
  extraCardPaymentDetailsView: { flexDirection: "row", columnGap: 24 },
  cardPaymentText2: {
    width: horizontalScale(165),
    height: verticalScale(68),
  },
});

import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Section from "@/components/Section";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const PaymentOptions = ({ onPress }: any) => {
  return (
    <>
      <Section style={styles.paymentSection}>
        <View style={styles.paymentView}>
          <AntDesign name="pluscircle" size={24} color="black" />
          <Text style={styles.paymentText}>PayPal</Text>
        </View>
      </Section>
      <Section style={styles.paymentSection}>
        <Pressable onPress={onPress}>
          <View style={styles.paymentView}>
            <AntDesign name="pluscircle" size={24} color="black" />
            <Text style={styles.paymentText}>Add Credit Card</Text>
          </View>
        </Pressable>
      </Section>
      <Section style={styles.paymentSection}>
        <View style={styles.paymentView}>
          <AntDesign name="pluscircle" size={24} color="black" />
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
  container: { rowGap: 18 },
  paymentStep2Title: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 27.72,
  },
  paymentSection: { paddingHorizontal: 12 },
  paymentView: {
    flexDirection: "row",
    columnGap: 9,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 20.16,
  },
  cardPaymentTextInput: {
    width: 352,
    height: 68,
    backgroundColor: "#E5EAF4",
    paddingHorizontal: 9,
    borderColor: "#CDCDCD",
    borderRadius: 5,
  },
  cardPaymentText1: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 22.68,
    borderWidth: 1,
    borderColor: "#CDCDCD",
    borderRadius: 5,
  },
  extraCardPaymentDetailsView: { flexDirection: "row", columnGap: 24 },
  cardPaymentText2: {
    width: 165,
    height: 68,
  },
});

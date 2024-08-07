import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Container from "@/components/Container";
import Chip from "@/components/Chip";
import SearchBar from "@/components/SearchBar";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { scaleFactor } from "@/constants/WindowDimensions";

const Message = () => {
  return (
    <View style={styles.messageView}>
      <Image
        source={require("@/assets/images/keke.webp")}
        style={styles.image}
      />
      <View style={styles.messageInnerView}>
        <View>
          <Text style={styles.sender}>Keke Palmer</Text>
          <Text style={styles.text}>What's up baby?</Text>
        </View>
        <View style={styles.timeView}>
          <View style={styles.counter}>
            <Text style={styles.counterText}>02</Text>
          </View>
          <Text style={styles.time}>01:06 PM</Text>
        </View>
      </View>
    </View>
  );
};

const Inbox = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.searchBarView}>
        <SearchBar />
      </View>
      <View style={styles.chipView}>
        <Chip style={{ ...styles.chip, ...styles.chipChat }}>
          <Text style={[styles.chipText, styles.chatText]}>Chat</Text>
        </Chip>
        <Chip style={{ ...styles.chip, ...styles.chipCalls }}>
          <Text style={[styles.chipText, styles.callsText]}>Calls</Text>
        </Chip>
      </View>
      <ScrollView style={styles.scrollView}>
        <Message />
        <Message />
        <Message />
      </ScrollView>
    </Container>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    rowGap: moderateScale(15),
  },
  searchBarView: {
    justifyContent: "center",
    alignItems: "center",
  },
  chipView: {
    flexDirection: "row",
    columnGap: moderateScale(15),
  },
  chip: {
    width: moderateScale(160),
    height: verticalScale(45),
    justifyContent: "center",
    alignItems: "center",
  },
  chipChat: {
    backgroundColor: "#003096",
  },
  chipCalls: {
    backgroundColor: "#E5EAF4",
  },
  chipText: {
    fontSize: moderateScale(22),
    fontWeight: "600",
    lineHeight: moderateScale(27.72),
    textAlign: "center",
  },
  chatText: {
    color: "#fff",
  },
  callsText: {
    color: "#000",
  },
  messageView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: moderateScale(9),
    borderBottomWidth: moderateScale(1),
  },
  messageInnerView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: moderateScale(100),
    marginVertical: verticalScale(30),
  },
  sender: {
    fontSize: moderateScale(18),
    fontWeight: "600",
    lineHeight: moderateScale(22.68),
    textAlign: "center",
  },
  text: {
    fontSize: moderateScale(12),
    fontWeight: "500",
    lineHeight: moderateScale(15.12),
    textAlign: "center",
  },
  timeView: {
    alignItems: "center",
    paddingVertical: moderateScale(9),
    rowGap: moderateScale(6),
  },
  counter: {
    width: scale(24),
    height: verticalScale(24),
    borderRadius: moderateScale(30),
    backgroundColor: "#003096",
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    color: "#fff",
    fontSize: moderateScale(10),
    fontWeight: "600",
  },
  time: {
    fontSize: moderateScale(10),
    fontWeight: "600",
    lineHeight: moderateScale(12.6),
    textAlign: "center",
  },
  image: {
    width: moderateScale(50, scaleFactor),
    height: moderateScale(50, scaleFactor),
    resizeMode: "cover",
    borderRadius: moderateScale(40, scaleFactor),
  },
  scrollView: { paddingHorizontal: scale(30) },
});

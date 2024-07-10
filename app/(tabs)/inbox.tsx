import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import Container from "@/components/Container";
import Chip from "@/components/Chip";
import SearchBar from "@/components/SearchBar";

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
      <ScrollView style={{ paddingHorizontal: 30 }}>
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
    rowGap: 15,
  },
  searchBarView: {
    justifyContent: "center",
    alignItems: "center",
  },
  chipView: {
    flexDirection: "row",
    columnGap: 15,
  },
  chip: {
    width: 160,
    height: 45,
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
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 27.72,
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
    columnGap: 9,
    width: "100%",
    borderBottomWidth: 1,
  },
  messageInnerView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 120,
    marginVertical: 30,
  },
  textView: {},
  sender: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 22.68,
    textAlign: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 15.12,
    textAlign: "center",
  },
  timeView: {
    alignItems: "center",
    paddingVertical: 9,
    rowGap: 6,
  },
  counter: {
    width: 24,
    height: 24,
    borderRadius: 30,
    backgroundColor: "#003096",
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: 600,
  },
  time: {
    fontSize: 10,
    fontWeight: 600,
    lineHeight: 12.6,
    textAlign: "center",
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 40,
  },
});

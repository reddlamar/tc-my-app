import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Section from "../components/Section";
import Container from "../components/Container";

const notifications = () => {
  return (
    <Container style={styles.container}>
      <Section style={styles.sectionContainer}>
        <AntDesign name="checkcircle" size={18} color="#06367E" />
        <View style={styles.sectionView}>
          <Text style={styles.title}>Transaction Successfully!</Text>
          <View style={styles.sectionInnerView}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
            <Text style={styles.description}>5 mins ago</Text>
          </View>
        </View>
      </Section>
      <Section style={styles.sectionContainer}>
        <Ionicons name="thumbs-up-sharp" size={18} color="#06367E" />
        <View style={styles.sectionView}>
          <Text style={styles.title}>Transaction Successfully!</Text>
          <View style={styles.sectionInnerView}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
            <Text style={styles.description}>5 mins ago</Text>
          </View>
        </View>
      </Section>
      <Section style={styles.sectionContainer}>
        <AntDesign name="checkcircle" size={18} color="#06367E" />
        <View style={styles.sectionView}>
          <Text style={styles.title}>Lorem Ipsum</Text>
          <View style={styles.sectionInnerView}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
            <Text style={styles.description}>5 mins ago</Text>
          </View>
        </View>
      </Section>
      <Section style={styles.sectionContainer}>
        <AntDesign name="checkcircle" size={18} color="#06367E" />
        <View style={styles.sectionView}>
          <Text style={styles.title}>Lorem Ipsum</Text>
          <View style={styles.sectionInnerView}>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
            <Text style={styles.description}>5 mins ago</Text>
          </View>
        </View>
      </Section>
    </Container>
  );
};

export default notifications;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    rowGap: 18,
    backgroundColor: "#fff",
  },
  sectionContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingLeft: 3,
    columnGap: 9,
  },
  sectionView: { alignItems: "flex-start" },
  title: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 17.64,
    textAlign: "center",
  },
  sectionInnerView: { flexDirection: "row", columnGap: 33 },
  description: {
    fontSize: 10,
    fontWeight: 300,
    color: "#8E8787",
  },
});

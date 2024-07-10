import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Chip from "@/components/Chip";

const Profile = () => {
  return (
    <Container style={styles.container}>
      <Image source={require("@/assets/images/LR.png")} style={styles.image} />
      <Section style={styles.section}>
        <Entypo name="edit" size={24} color="#C0C1C2" style={styles.editIcon} />
        <View style={styles.topView}>
          <Text style={styles.nameHere}>Name Here</Text>
          <Text style={styles.tagLine}>Tag Line</Text>
        </View>
        <View style={styles.middleView}>
          <Text style={styles.subTitle}>About Me</Text>
          <Text style={styles.aboutMe}>
            Lorem ipsum dolor sit amet consectetur. Nec eget accumsan molestie
            proin. Integer rhoncus vitae nisi natoque ac mus tellus scelerisque
            gravida.
          </Text>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.subTitle}>My Skills</Text>
          <View style={styles.bottomInnerView}>
            <Chip style={styles.chip}>
              <Text style={styles.chipText}>UI/UX</Text>
            </Chip>
            <Chip style={styles.chip}>
              <Text style={styles.chipText}>Graphics Design</Text>
            </Chip>
            <Chip style={styles.chip}>
              <Text style={styles.chipText}>Figma</Text>
            </Chip>
            <Chip style={styles.chip}>
              <Text style={styles.chipText}>Video Editor</Text>
            </Chip>
          </View>
        </View>
      </Section>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 90,
    position: "relative",
    top: 30,
    zIndex: 1,
  },
  section: {
    width: 346,
    height: 427,
    borderRadius: 10,
    alignItems: "center",
  },
  editIcon: {
    position: "absolute",
    right: 6,
    top: 6,
  },
  topView: {
    marginTop: 24,
    justifyContent: "center",
  },
  nameHere: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 27.72,
    textAlign: "center",
  },
  tagLine: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 15.12,
    textAlign: "center",
    color: "#A9A5A5",
  },
  middleView: {
    padding: 12,
    rowGap: 9,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 22.68,
    textAlign: "left",
  },
  aboutMe: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 17.64,
    color: "#B7B0B0",
  },
  bottomView: {
    padding: 12,
    rowGap: 9,
  },
  bottomInnerView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
  },
  chip: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#C6C6C6",
  },
  chipText: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 17.64,
  },
});

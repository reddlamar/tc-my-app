import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
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
    width: scale(100),
    height: verticalScale(100),
    resizeMode: "cover",
    borderRadius: moderateScale(100 / 2),
    position: "relative",
    top: moderateScale(30),
    zIndex: 1,
  },
  section: {
    width: scale(300),
    height: verticalScale(427),
    borderRadius: moderateScale(10),
    alignItems: "center",
    justifyContent: "center",
    rowGap: verticalScale(24),
    // marginHorizontal: moderateScale(50),
  },
  editIcon: {
    position: "absolute",
    right: verticalScale(6),
    top: moderateScale(6),
  },
  topView: {
    marginTop: moderateScale(24),
    justifyContent: "center",
  },
  nameHere: {
    fontSize: moderateScale(22),
    fontWeight: "600",
    lineHeight: moderateScale(27.72),
    textAlign: "center",
  },
  tagLine: {
    fontSize: moderateScale(12),
    fontWeight: "600",
    lineHeight: moderateScale(15.12),
    textAlign: "center",
    color: "#A9A5A5",
  },
  middleView: {
    padding: moderateScale(12),
    rowGap: moderateScale(9),
  },
  subTitle: {
    fontSize: moderateScale(18),
    fontWeight: "600",
    lineHeight: moderateScale(22.68),
    textAlign: "left",
  },
  aboutMe: {
    fontSize: moderateScale(14),
    fontWeight: "400",
    lineHeight: moderateScale(17.64),
    color: "#B7B0B0",
  },
  bottomView: {
    padding: moderateScale(12),
    rowGap: moderateScale(9),
  },
  bottomInnerView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: moderateScale(9),
  },
  chip: {
    backgroundColor: "transparent",
    borderWidth: moderateScale(1),
    borderColor: "#C6C6C6",
  },
  chipText: {
    fontSize: moderateScale(14),
    fontWeight: "400",
    lineHeight: moderateScale(17.64),
  },
});

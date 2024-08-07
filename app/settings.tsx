import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import Container from "../components/Container";
import Section from "../components/Section";
import { Colors } from "../constants/Colors";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

const settings = () => {
  const iconSize = moderateScale(24);

  return (
    <Container style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/LR.png")}
          style={styles.image}
        />
      </View>
      <Section style={styles.section}>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <Ionicons
              name="person-sharp"
              size={iconSize}
              color={Colors.light.tint}
            />
            <Text>Edit Profile</Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={iconSize}
            color={Colors.light.tint}
          />
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <AntDesign
              name="creditcard"
              size={iconSize}
              color={Colors.light.tint}
            />
            <Text>Payment Option</Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={iconSize}
            color={Colors.light.tint}
          />
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <MaterialCommunityIcons
              name="file-document-multiple"
              size={iconSize}
              color={Colors.light.tint}
            />
            <Text>Terms & Conditions</Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={iconSize}
            color={Colors.light.tint}
          />
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <FontAwesome5
              name="headset"
              size={iconSize}
              color={Colors.light.tint}
            />
            <Text>Help Center</Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={iconSize}
            color={Colors.light.tint}
          />
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <FontAwesome6
              name="reply"
              size={iconSize}
              color={Colors.light.tint}
            />
            <Text>Invite Friends</Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={iconSize}
            color={Colors.light.tint}
          />
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <SimpleLineIcons
              name="logout"
              size={iconSize}
              color={Colors.light.tint}
            />
            <Text>Logout</Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={iconSize}
            color={Colors.light.tint}
          />
        </View>
      </Section>
    </Container>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageContainer: {
    position: "relative",
    zIndex: 1,
  },
  image: {
    width: moderateScale(100),
    height: moderateVerticalScale(100),
    resizeMode: "cover",
    borderRadius: moderateScale(90),
  },
  section: {
    rowGap: moderateVerticalScale(30),
    paddingHorizontal: moderateScale(9),
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: moderateScale(9),
  },
});

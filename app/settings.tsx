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

const settings = () => {
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
            <Ionicons name="person-sharp" size={24} color={Colors.light.tint} />
            <Text>Edit Profile</Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color={Colors.light.tint}
          />
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <AntDesign name="creditcard" size={24} color={Colors.light.tint} />
            <Text>Payment Option</Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color={Colors.light.tint}
          />
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <MaterialCommunityIcons
              name="file-document-multiple"
              size={24}
              color={Colors.light.tint}
            />
            <Text>Terms & Conditions</Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color={Colors.light.tint}
          />
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <FontAwesome5 name="headset" size={24} color={Colors.light.tint} />
            <Text>Help Center</Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color={Colors.light.tint}
          />
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <FontAwesome6 name="reply" size={24} color={Colors.light.tint} />
            <Text>Invite Friends</Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
            color={Colors.light.tint}
          />
        </View>
        <View style={styles.view}>
          <View style={styles.innerView}>
            <SimpleLineIcons
              name="logout"
              size={24}
              color={Colors.light.tint}
            />
            <Text>Logout</Text>
          </View>
          <MaterialIcons
            name="arrow-forward-ios"
            size={24}
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
  imageContainer: { position: "relative", top: 25, zIndex: 1 },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 90,
  },
  section: {
    rowGap: 30,
    paddingHorizontal: 9,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 9,
  },
});

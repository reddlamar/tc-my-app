import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import {
  baseWidth,
  baseHeight,
  windowHeight,
  windowWidth,
  scaleFactor,
  horizontalScale,
  verticalScale,
} from "@/constants/WindowDimensions";

const CourseDetailsItems = () => {
  return (
    <View style={styles.extraDetailsView}>
      <View style={styles.extraDetailsInnerView}>
        <View style={styles.extraDetailsItemView}>
          <FontAwesome6
            name="book"
            size={horizontalScale(20)}
            color={Colors.light.tint}
          />
          <Text>80+ Lectures</Text>
        </View>
        <View style={styles.extraDetailsItemView}>
          <Ionicons
            name="time"
            size={horizontalScale(20)}
            color={Colors.light.tint}
          />
          <Text>8 Weeks</Text>
        </View>
      </View>
      <View style={styles.extraDetailsInnerView}>
        <View style={styles.extraDetailsItemView}>
          <FontAwesome6
            name="certificate"
            size={horizontalScale(20)}
            color={Colors.light.tint}
          />
          <Text>Certificates</Text>
        </View>
        <View style={styles.extraDetailsItemView}>
          <Ionicons
            name="pricetag"
            size={horizontalScale(20)}
            color={Colors.light.tint}
          />
          <Text>10% Off</Text>
        </View>
      </View>
    </View>
  );
};

export default CourseDetailsItems;

const styles = StyleSheet.create({
  extraDetailsView: {
    backgroundColor: "#002A9621",
    borderRadius: horizontalScale(20),
    paddingVertical: verticalScale(21),
    paddingHorizontal: horizontalScale(27),
    rowGap: verticalScale(12),
    width: horizontalScale(360),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  extraDetailsInnerView: {
    flexDirection: "column",
    justifyContent: "flex-start",
    rowGap: verticalScale(15),
  },
  extraDetailsItemView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: horizontalScale(3),
    justifyContent: "flex-start",
  },
});

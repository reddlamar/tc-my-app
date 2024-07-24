import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

const CourseDetailsItems = () => {
  return (
    <View style={styles.extraDetailsView}>
      <View style={styles.extraDetailsInnerView}>
        <View style={styles.extraDetailsItemView}>
          <FontAwesome6
            name="book"
            size={moderateScale(20)}
            color={Colors.light.tint}
          />
          <Text>80+ Lectures</Text>
        </View>
        <View style={styles.extraDetailsItemView}>
          <Ionicons
            name="time"
            size={moderateScale(20)}
            color={Colors.light.tint}
          />
          <Text>8 Weeks</Text>
        </View>
      </View>
      <View style={styles.extraDetailsInnerView}>
        <View style={styles.extraDetailsItemView}>
          <FontAwesome6
            name="certificate"
            size={moderateScale(20)}
            color={Colors.light.tint}
          />
          <Text>Certificates</Text>
        </View>
        <View style={styles.extraDetailsItemView}>
          <Ionicons
            name="pricetag"
            size={moderateScale(20)}
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
    borderRadius: moderateScale(20),
    paddingVertical: moderateVerticalScale(21),
    paddingHorizontal: moderateScale(27),
    rowGap: moderateVerticalScale(12),
    width: moderateScale(330),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  extraDetailsInnerView: {
    flexDirection: "column",
    justifyContent: "flex-start",
    rowGap: moderateVerticalScale(15),
  },
  extraDetailsItemView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: moderateScale(3),
    justifyContent: "flex-start",
  },
});

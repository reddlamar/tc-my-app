import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Chip from "@/components/Chip";
import Rating from "@/components/Rating";

import EnrollButton from "@/components/EnrollButton";
import CourseDetailsItems from "@/components/CourseDetailsItems";
import { scaleFactor } from "@/constants/WindowDimensions";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { Colors } from "@/constants/Colors";

const Overview = ({ route }: any) => {
  const course = route?.params?.course;

  return (
    <>
      <ScrollView>
        <View style={styles.detailsView}>
          <View>
            <Text style={styles.title}>{course?.title}</Text>
            <View style={styles.authorPriceView}>
              <Text style={styles.author}>{course?.author}</Text>
              <Text style={styles.price}>${course?.price}</Text>
            </View>
            <Rating rating={course?.rating ?? 0} />
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.description}>
              {course?.description}
              <Text style={styles.readMoreText}> Read More</Text>
            </Text>
          </View>
          <CourseDetailsItems />
        </View>
        <View style={styles.skillsView}>
          <Text style={styles.skillsText}>Skills</Text>
          <View style={styles.skillChipsView}>
            <Chip style={styles.skillChip}>
              <Text style={styles.chipText}>Adobe</Text>
            </Chip>
            <Chip style={styles.skillChip}>
              <Text style={styles.chipText}>Adobe Photo Shop</Text>
            </Chip>
            <Chip style={styles.skillChip}>
              <Text style={styles.chipText}>Logo</Text>
            </Chip>
            <Chip style={styles.skillChip}>
              <Text style={styles.chipText}>Designing</Text>
            </Chip>
            <Chip style={styles.skillChip}>
              <Text style={styles.chipText}>Poster Design</Text>
            </Chip>
            <Chip style={styles.skillChip}>
              <Text style={styles.chipText}>Figma</Text>
            </Chip>
          </View>
        </View>
      </ScrollView>
      <EnrollButton course={course} />
    </>
  );
};

export default Overview;

const styles = StyleSheet.create({
  errorAndLoadingView: { justifyContent: "center", alignItems: "center" },
  errorText: { fontSize: moderateScale(18) },
  detailsView: {
    flex: 5,
    paddingHorizontal: moderateScale(9),
    rowGap: moderateVerticalScale(12),
    paddingVertical: moderateVerticalScale(12),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: "600",
    lineHeight: moderateVerticalScale(25.2),
  },
  authorPriceView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: moderateVerticalScale(9),
    marginBottom: moderateVerticalScale(3),
  },
  author: {
    fontSize: moderateScale(12),
    fontWeight: "400",
    lineHeight: moderateVerticalScale(15.12),
    color: "#B7B0B0",
  },
  price: {
    fontSize: moderateScale(18),
    fontWeight: "600",
    lineHeight: moderateVerticalScale(22.68),
  },
  description: {
    fontSize: moderateScale(15),
    fontWeight: "300",
    lineHeight: moderateVerticalScale(17.64, scaleFactor),
  },
  readMoreText: { color: Colors.light.tint, marginLeft: moderateScale(15) },
  extraDetailsView: {
    backgroundColor: "#002A9621",
    borderRadius: moderateScale(20),
    paddingVertical: moderateVerticalScale(18),
    paddingHorizontal: moderateVerticalScale(24),
    rowGap: moderateVerticalScale(9),
    width: moderateScale(330),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  extraDetailsInnerView: {
    flexDirection: "column",
    justifyContent: "flex-start",
    rowGap: moderateScale(12),
  },
  extraDetailsItemView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: moderateScale(3),
    justifyContent: "flex-start",
  },
  skillsView: {
    flex: 2,
    rowGap: moderateVerticalScale(9),
    paddingHorizontal: moderateScale(9),
  },
  skillsText: {
    fontSize: moderateScale(20),
    fontWeight: "600",
    lineHeight: moderateVerticalScale(25.2),
    padding: moderateScale(6),
  },
  skillChipsView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: moderateScale(6),
  },
  skillChip: {
    width: "auto",
    height: moderateVerticalScale(30),
    justifyContent: "center",
    alignItems: "center",
  },
  chipText: {
    fontSize: moderateScale(14),
    fontWeight: "400",
    lineHeight: moderateVerticalScale(17.64),
  },
});

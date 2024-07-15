import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import CourseDetailsItems from "@/components/CourseDetailsItems";
import Rating from "@/components/Rating";
import { CourseContext } from "@/context/CourseContext";
import { horizontalScale, verticalScale } from "@/constants/WindowDimensions";

const PaymentStep1 = () => {
  const { course } = useContext(CourseContext);
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Overview</Text>
          <View style={styles.subTitle}>
            <Text style={[styles.subTitleText, styles.subTitleText1]}>
              Course Name:
            </Text>
            <Text style={[styles.subTitleText, styles.subTitleText2]}>
              {course?.title}
            </Text>
          </View>
        </View>
        <CourseDetailsItems />
        <View style={styles.courseDetailsView}>
          <View style={styles.courseDetailsInnerView}>
            <View style={styles.courseDetailsTitleView}>
              <Text>Course Rating:</Text>
            </View>
            <View style={styles.courseDetailsTitleView}>
              <Text>Course Time:</Text>
            </View>
            <View>
              <Text>Course Trainer:</Text>
            </View>
          </View>
          <View style={styles.courseDetailsInnerView}>
            <Rating rating={course?.rating ?? 0} />
            <Text>8 Weeks</Text>
            <Text>{course?.author}</Text>
          </View>
        </View>
      </View>
      <View style={styles.purchaseDetailsView}>
        <Text style={styles.purchaseDetailsText}>Purchase Details</Text>
        <View style={styles.purchaseDetailsInnerView}>
          <View style={styles.purchaseDetailsItemView}>
            <Text>Date: 19/03/2024</Text>
            <Text>Coupon: 10% off</Text>
          </View>
          <View style={styles.purchaseDetailsItemView}>
            <Text>Price: $72</Text>
            <Text>Final Price: $65</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaymentStep1;

const styles = StyleSheet.create({
  container: { rowGap: verticalScale(21), alignItems: "center" },
  topView: {
    rowGap: verticalScale(21),
    justifyContent: "center",
    paddingHorizontal: horizontalScale(15),
  },
  titleView: {
    rowGap: verticalScale(15),
  },
  title: {
    fontSize: horizontalScale(22),
    fontWeight: "600",
    lineHeight: verticalScale(27.72),
    textAlign: "center",
    alignSelf: "flex-start",
  },
  subTitle: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 3,
  },
  subTitleText: {
    fontSize: horizontalScale(20),
  },
  subTitleText1: {
    fontWeight: "400",
    lineHeight: verticalScale(25.2),
    textAlign: "center",
  },
  subTitleText2: { fontWeight: "600" },
  courseDetailsView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: horizontalScale(9),
  },
  courseDetailsInnerView: { rowGap: verticalScale(9) },
  courseDetailsTitleView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: horizontalScale(21),
  },
  purchaseDetailsView: {
    width: horizontalScale(352),
    height: verticalScale(97),
    borderWidth: horizontalScale(1),
    borderRadius: horizontalScale(20),
    borderColor: "#D9E0EF",
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(18),
  },
  purchaseDetailsText: {
    position: "absolute",
    top: verticalScale(-8),
    left: horizontalScale(12),
    backgroundColor: "#fff",
    marginHorizontal: horizontalScale(12),
    paddingHorizontal: horizontalScale(3),
  },
  purchaseDetailsInnerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: verticalScale(9),
  },
  purchaseDetailsItemView: {
    rowGap: verticalScale(24),
    justifyContent: "center",
  },
});

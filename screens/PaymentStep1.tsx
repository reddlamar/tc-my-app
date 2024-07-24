import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import CourseDetailsItems from "@/components/CourseDetailsItems";
import Rating from "@/components/Rating";
import { CourseContext } from "@/context/CourseContext";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

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
        <View>
          <CourseDetailsItems />
        </View>
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
  container: {
    rowGap: moderateVerticalScale(21),
    alignItems: "center",
  },
  topView: {
    rowGap: moderateVerticalScale(21),
    justifyContent: "center",
  },
  titleView: {
    rowGap: moderateVerticalScale(15),
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: "600",
    lineHeight: moderateVerticalScale(27.72),
    textAlign: "center",
    alignSelf: "flex-start",
  },
  subTitle: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: moderateScale(3),
  },
  subTitleText: {
    fontSize: moderateScale(20),
  },
  subTitleText1: {
    fontWeight: "400",
    lineHeight: moderateVerticalScale(25.2),
    textAlign: "center",
  },
  subTitleText2: { fontWeight: "600" },
  courseDetailsView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: moderateScale(9),
    marginHorizontal: moderateScale(9),
  },
  courseDetailsInnerView: { rowGap: moderateVerticalScale(9) },
  courseDetailsTitleView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: moderateScale(21),
  },
  purchaseDetailsView: {
    width: moderateScale(340),
    height: moderateVerticalScale(97),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(20),
    borderColor: "#D9E0EF",
    paddingVertical: moderateVerticalScale(12),
    paddingHorizontal: moderateScale(18),
  },
  purchaseDetailsText: {
    position: "absolute",
    top: moderateVerticalScale(-8),
    left: moderateScale(12),
    backgroundColor: "#fff",
    marginHorizontal: moderateScale(12),
    paddingHorizontal: moderateScale(3),
  },
  purchaseDetailsInnerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: moderateVerticalScale(9),
  },
  purchaseDetailsItemView: {
    rowGap: moderateVerticalScale(24),
    justifyContent: "center",
  },
});

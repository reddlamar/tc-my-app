import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useCallback } from "react";
import Section from "@/components/Section";
import { Review } from "@/types/CourseType";
import Rating from "@/components/Rating";
import Container from "@/components/Container";
import EnrollButton from "@/components/EnrollButton";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

const Reviews = ({ route }: any) => {
  const course = route?.params?.course;

  const renderItem = useCallback((item: Review) => {
    return (
      <Section style={styles.section}>
        <View style={styles.container}>
          <View style={styles.topView}>
            <View style={styles.circleView}></View>
            <View>
              <Text style={styles.userName}>{item.userName}</Text>
              <Text style={styles.userType}>{item.userType}</Text>
            </View>
          </View>
          <View>
            <Rating rating={item.rating} />
          </View>
        </View>
        <Text>{item.text}</Text>
      </Section>
    );
  }, []);

  if (!course?.reviews.length) {
    return (
      <Container>
        <Text>No reviews for {course?.title}</Text>
      </Container>
    );
  }

  return (
    <Container>
      <FlatList
        data={course?.reviews}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={styles.flatList}
        renderItem={({ item }) => renderItem(item)}
      />
      {course && <EnrollButton course={course} />}
    </Container>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between" },
  flatList: {
    rowGap: moderateVerticalScale(9),
    alignItems: "center",
    paddingVertical: moderateVerticalScale(15),
  },
  section: { padding: moderateScale(9), rowGap: moderateVerticalScale(9) },
  topView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    columnGap: moderateScale(6),
  },
  circleView: {
    borderRadius: moderateScale(50),
    backgroundColor: "#D9D9D9",
    width: moderateScale(47),
    height: moderateVerticalScale(47),
  },
  userName: { fontWeight: "600", fontSize: moderateScale(12) },
  userType: {
    fontWeight: "600",
    fontSize: moderateScale(10),
    color: "#B7B0B0",
  },
});

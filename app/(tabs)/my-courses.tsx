import React, { useCallback } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import * as Progress from "react-native-progress";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import Container from "@/components/Container";
import Section from "@/components/Section";

import { Colors } from "@/constants/Colors";
import { scaleFactor } from "@/constants/WindowDimensions";

import { Course } from "@/types/CourseType";

import { CourseProps } from "@/types/PropsTypes";
import { useAppSelector } from "@/hooks/useRedux";
import { selectCourses } from "@/features/redux/courses/coursesSlice";

const CourseItem = ({ course }: CourseProps) => {
  return (
    <Section style={styles.section}>
      <Image source={{ uri: course.image }} style={styles.image} />
      <View>
        <Text style={styles.course}>{course.title}</Text>
        <Text style={styles.author}>{course.author}</Text>
        <View>
          <Text style={styles.percentDone}>
            {course.progressPercentage}% Done
          </Text>
          <Progress.Bar
            progress={course.progressPercentage / 100}
            width={moderateScale(174)}
            color={Colors.light.tint}
          />
        </View>
      </View>
    </Section>
  );
};

const MyCourses = () => {
  const courses = useAppSelector(selectCourses);

  const renderItem = useCallback(
    (item: Course) => <CourseItem course={item} />,
    []
  );

  return (
    <Container style={styles.container}>
      <FlatList
        data={courses}
        contentContainerStyle={styles.flatList}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => renderItem(item)}
      />
    </Container>
  );
};

export default MyCourses;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  flatList: { rowGap: verticalScale(24), marginTop: verticalScale(30) },
  section: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: scale(9),
    paddingHorizontal: moderateScale(9),
  },
  image: {
    width: moderateScale(51, scaleFactor),
    height: moderateScale(51, scaleFactor),
    borderRadius: moderateScale(5),
  },
  course: {
    fontSize: moderateScale(18),
    fontWeight: "600",
    lineHeight: scale(18.12),
  },
  author: {
    fontSize: moderateScale(12),
    fontWeight: "400",
    lineHeight: scale(12.6),
    color: "#B7B0B0",
  },
  percentDone: {
    fontSize: moderateScale(9),
    fontWeight: "500",
    lineHeight: scale(10.08),
    alignSelf: "flex-end",
    color: "#B7B0B0",
  },
});

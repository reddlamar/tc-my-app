import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useCallback } from "react";
import * as Progress from "react-native-progress";
import Container from "../../components/Container";
import Section from "@/components/Section";
import { Colors } from "@/constants/Colors";
import { courses } from "@/database/Courses";
import { Course } from "@/types/CourseType";

type CourseProps = {
  course: Course;
};

const CourseItem = ({ course }: CourseProps) => {
  return (
    <Section style={styles.section}>
      <Image source={course.image} style={styles.image} />
      <View>
        <Text style={styles.course}>{course.title}</Text>
        <Text style={styles.author}>{course.author}</Text>
        <View>
          <Text style={styles.percentDone}>
            {course.progressPercentage}% Done
          </Text>
          <Progress.Bar
            progress={course.progressPercentage / 100}
            width={174}
            color={Colors.light.tint}
          />
        </View>
      </View>
    </Section>
  );
};

const MyCourses = () => {
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
  flatList: { rowGap: 15, marginTop: 30 },
  section: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 9,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 5,
  },
  course: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 15.12,
  },
  author: {
    fontSize: 10,
    fontWeight: 400,
    lineHeight: 12.6,
    color: "#B7B0B0",
  },
  percentDone: {
    fontSize: 8,
    fontWeight: 500,
    lineHeight: 10.08,
    alignSelf: "flex-end",
    color: "#B7B0B0",
  },
});

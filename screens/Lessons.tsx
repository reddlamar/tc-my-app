import { FlatList, StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import { Chapter } from "@/types/CourseType";
import EnrollButton from "@/components/EnrollButton";
import Lesson from "@/components/Lesson";
import { verticalScale } from "react-native-size-matters";

const Lessons = ({ route }: any) => {
  const course = route?.params?.course;

  const renderItem = useCallback(
    (item: Chapter) => <Lesson chapter={item} />,
    []
  );

  return (
    <View style={styles.view}>
      <FlatList
        data={course?.lessons}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => renderItem(item)}
        contentContainerStyle={styles.flatList}
      />
      {course && <EnrollButton course={course} />}
    </View>
  );
};

export default Lessons;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    paddingVertical: verticalScale(18),
  },
  flatList: { rowGap: verticalScale(18) },
});

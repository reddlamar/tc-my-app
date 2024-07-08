import { FlatList, StyleSheet, View } from "react-native";
import React, { useCallback, useContext } from "react";
import { Chapter } from "@/types/CourseType";
import EnrollButton from "@/components/EnrollButton";
import Lesson from "@/components/Lesson";
import { CourseContext } from "@/context/CourseContext";

const Lessons = () => {
  const { course } = useContext(CourseContext);

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
        contentContainerStyle={{ rowGap: 18 }}
      />
      <EnrollButton />
    </View>
  );
};

export default Lessons;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 18,
  },
});
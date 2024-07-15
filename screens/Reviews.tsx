import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useCallback, useContext } from "react";
import Section from "@/components/Section";
import { Review } from "@/types/CourseType";
import Rating from "@/components/Rating";
import Container from "@/components/Container";
import EnrollButton from "@/components/EnrollButton";
import { CourseContext } from "@/context/CourseContext";
import { horizontalScale, verticalScale } from "@/constants/WindowDimensions";

const Reviews = () => {
  const { course } = useContext(CourseContext);

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

  return (
    <Container>
      <FlatList
        data={course?.reviews}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={styles.flatList}
        renderItem={({ item }) => renderItem(item)}
      />
      <EnrollButton />
    </Container>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between" },
  flatList: {
    rowGap: verticalScale(9),
    alignItems: "center",
    paddingVertical: verticalScale(15),
  },
  section: { padding: horizontalScale(9), rowGap: verticalScale(9) },
  topView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    columnGap: horizontalScale(6),
  },
  circleView: {
    borderRadius: horizontalScale(50),
    backgroundColor: "#D9D9D9",
    width: horizontalScale(47),
    height: verticalScale(47),
  },
  userName: { fontWeight: "600", fontSize: horizontalScale(12) },
  userType: {
    fontWeight: "600",
    fontSize: horizontalScale(10),
    color: "#B7B0B0",
  },
});

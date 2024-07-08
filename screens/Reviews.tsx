import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useCallback, useContext } from "react";
import Section from "@/components/Section";
import { Review } from "@/types/CourseType";
import Rating from "@/components/Rating";
import Container from "@/components/Container";
import EnrollButton from "@/components/EnrollButton";
import { CourseContext } from "@/context/CourseContext";

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
        contentContainerStyle={{
          rowGap: 9,
          alignItems: "center",
          paddingVertical: 15,
        }}
        renderItem={({ item }) => renderItem(item)}
      />
      <EnrollButton />
    </Container>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  section: { padding: 9, rowGap: 9 },
  container: { flexDirection: "row", justifyContent: "space-between" },
  topView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  },
  circleView: {
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
    width: 47,
    height: 47,
  },
  userName: { fontWeight: 600, fontSize: 12 },
  userType: { fontWeight: 600, fontSize: 10, color: "#B7B0B0" },
});
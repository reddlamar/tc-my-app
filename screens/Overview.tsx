import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import Rating from "@/components/Rating";
import Chip from "@/components/Chip";
import { useGetCourse } from "@/hooks/useGetCourse";
import EnrollButton from "@/components/EnrollButton";
import CourseDetailsItems from "@/components/CourseDetailsItems";
import { CourseContext } from "@/context/CourseContext";

const Overview = ({ route }: any) => {
  const course = useGetCourse(route?.params?.courseID ?? 1);
  const { setCourse } = useContext(CourseContext);

  useEffect(() => {
    setCourse(course);
  }, [course]);

  return (
    <ScrollView>
      <View style={styles.detailsView}>
        <View>
          <Text>{course?.title}</Text>
          <View style={styles.authorPriceView}>
            <Text>{course?.author}</Text>
            <Text>${course?.price}</Text>
          </View>
          <Rating rating={course?.rating ?? 0} />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>
            {course?.description}
            <Text style={{ color: "#003096" }}>Read More</Text>
          </Text>
        </View>
        <CourseDetailsItems />
      </View>
      <View style={styles.skillsView}>
        <Text style={{ padding: 6 }}>Skills</Text>
        <View style={styles.skillChipsView}>
          <Chip>
            <Text>Adobe</Text>
          </Chip>
          <Chip>
            <Text>Adobe Photo Shop</Text>
          </Chip>
          <Chip>
            <Text>Logo</Text>
          </Chip>
          <Chip>
            <Text>Designing</Text>
          </Chip>
          <Chip>
            <Text>Poster Design</Text>
          </Chip>
          <Chip>
            <Text>Figma</Text>
          </Chip>
        </View>
      </View>
      <EnrollButton />
    </ScrollView>
  );
};

export default Overview;

const styles = StyleSheet.create({
  detailsView: {
    flex: 5,
    paddingHorizontal: 9,
    rowGap: 12,
    paddingVertical: 12,
  },
  authorPriceView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 9,
    marginBottom: 3,
  },
  readMoreText: { color: "#003096" },
  extraDetailsView: {
    backgroundColor: "#002A9621",
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 24,
    rowGap: 9,
    width: 330,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  extraDetailsInnerView: {
    flexDirection: "column",
    justifyContent: "flex-start",
    rowGap: 12,
  },
  extraDetailsItemView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 3,
    justifyContent: "flex-start",
  },
  skillsView: {
    flex: 2,
    rowGap: 9,
    paddingHorizontal: 9,
  },
  skillChipsView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
});

import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Rating from "@/components/Rating";
import Chip from "@/components/Chip";
import { useGetCourse } from "@/hooks/useGetCourse";
import EnrollButton from "@/components/EnrollButton";
import CourseDetailsItems from "@/components/CourseDetailsItems";
import {
  baseWidth,
  baseHeight,
  windowHeight,
  windowWidth,
  scaleFactor,
} from "@/constants/WindowDimensions";

const Overview = ({ route }: any) => {
  const { course, error, isLoading } = useGetCourse(route?.params?.id);

  if (error) {
    return (
      <View style={styles.errorAndLoadingView}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.errorAndLoadingView}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.detailsView}>
        <View>
          <Text style={styles.title}>{course?.title}</Text>
          <View style={styles.authorPriceView}>
            <Text style={styles.author}>{course?.author}</Text>
            <Text style={styles.price}>${course?.price}</Text>
          </View>
          <Rating rating={course?.rating ?? 0} />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.description}>
            {course?.description}
            <Text style={styles.readMoreText}>Read More</Text>
          </Text>
        </View>
        <CourseDetailsItems />
      </View>
      <View style={styles.skillsView}>
        <Text style={styles.skillsText}>Skills</Text>
        <View style={styles.skillChipsView}>
          <Chip style={styles.skillChip}>
            <Text style={styles.chipText}>Adobe</Text>
          </Chip>
          <Chip style={styles.skillChip}>
            <Text style={styles.chipText}>Adobe Photo Shop</Text>
          </Chip>
          <Chip style={styles.skillChip}>
            <Text style={styles.chipText}>Logo</Text>
          </Chip>
          <Chip style={styles.skillChip}>
            <Text style={styles.chipText}>Designing</Text>
          </Chip>
          <Chip style={styles.skillChip}>
            <Text style={styles.chipText}>Poster Design</Text>
          </Chip>
          <Chip style={styles.skillChip}>
            <Text style={styles.chipText}>Figma</Text>
          </Chip>
        </View>
      </View>
      <EnrollButton />
    </ScrollView>
  );
};

export default Overview;

const styles = StyleSheet.create({
  errorAndLoadingView: { justifyContent: "center", alignItems: "center" },
  errorText: { fontSize: 18 },
  detailsView: {
    flex: 5,
    paddingHorizontal: windowWidth > baseWidth ? 9 * scaleFactor : 9,
    rowGap: windowHeight > baseHeight ? 12 * scaleFactor : 12,
    paddingVertical: windowHeight > baseHeight ? 12 * scaleFactor : 12,
  },
  title: {
    fontSize: windowWidth > baseWidth ? 20 * scaleFactor : 20,
    fontWeight: 600,
    lineHeight: windowHeight > baseHeight ? 25.2 * scaleFactor : 25.2,
  },
  authorPriceView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: windowHeight > baseHeight ? 9 * scaleFactor : 9,
    marginBottom: windowHeight > baseHeight ? 3 * scaleFactor : 3,
  },
  author: {
    fontSize: windowWidth > baseWidth ? 12 * scaleFactor : 12,
    fontWeight: 400,
    lineHeight: windowHeight > baseHeight ? 15.12 * scaleFactor : 15.12,
    color: "#B7B0B0",
  },
  price: {
    fontSize: windowWidth > baseWidth ? 18 * scaleFactor : 18,
    fontWeight: 600,
    lineHeight: windowHeight > baseHeight ? 22.68 * scaleFactor : 22.68,
  },
  description: {
    fontSize: windowWidth > baseWidth ? 18 * scaleFactor : 14,
    fontWeight: 300,
    lineHeight: windowHeight > baseHeight ? 20.64 * scaleFactor : 17.64,
  },
  readMoreText: { color: "#003096" },
  extraDetailsView: {
    backgroundColor: "#002A9621",
    borderRadius: 20,
    paddingVertical: windowHeight > baseHeight ? 18 * scaleFactor : 18,
    paddingHorizontal: windowWidth > baseWidth ? 24 * scaleFactor : 24,
    rowGap: windowHeight > baseHeight ? 9 * scaleFactor : 9,
    width: windowWidth > baseWidth ? 330 * scaleFactor : 330,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  extraDetailsInnerView: {
    flexDirection: "column",
    justifyContent: "flex-start",
    rowGap: windowHeight > baseHeight ? 12 * scaleFactor : 12,
  },
  extraDetailsItemView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: windowWidth > baseWidth ? 3 * scaleFactor : 3,
    justifyContent: "flex-start",
  },
  skillsView: {
    flex: 2,
    rowGap: windowHeight > baseHeight ? 9 * scaleFactor : 9,
    paddingHorizontal: windowWidth > baseWidth ? 9 * scaleFactor : 9,
  },
  skillsText: {
    fontSize: windowWidth > baseWidth ? 20 * scaleFactor : 20,
    fontWeight: 600,
    lineHeight: windowHeight > baseHeight ? 25.2 * scaleFactor : 25.2,
    padding: windowWidth > baseWidth ? 6 * scaleFactor : 6,
  },
  skillChipsView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: windowWidth > baseWidth ? 6 * scaleFactor : 6,
  },
  skillChip: {
    width: "auto",
    height: windowHeight > baseHeight ? 30 * scaleFactor : 30,
    justifyContent: "center",
    alignItems: "center",
  },
  chipText: {
    fontSize: windowWidth > baseWidth ? 14 * scaleFactor : 14,
    fontWeight: 400,
    lineHeight: windowHeight > baseHeight ? 17.64 * scaleFactor : 17.64,
  },
});

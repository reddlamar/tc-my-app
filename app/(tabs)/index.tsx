import React, { useCallback, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Octicons } from "@expo/vector-icons";

import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import Chip from "@/components/Chip";
import Card from "@/components/Card";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingIndicator from "@/components/LoadingIndicator";

import { Course } from "@/types/CourseType";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { useGetCourses } from "@/hooks/useGetCourses";

const HomeScreen = () => {
  const { courses, error, status } = useGetCourses();

  const renderItem = useCallback((item: Course, index: number) => {
    return (
      <Link
        href={`/details/${item.id}`}
        style={
          index % 2 === 0
            ? { marginRight: moderateScale(15) }
            : { marginRight: 0 }
        }
      >
        <Card
          imageSource={item.image}
          title={item.title}
          rating={item.rating}
          author={item.author}
          progressPercentage={item.progressPercentage}
        />
      </Link>
    );
  }, []);

  if (status === "loading") {
    return <LoadingIndicator text="Getting Courses..." />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <Container style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.welcomeUserView}>
          <Text style={[styles.text, styles.welcomeText]}>Welcome, </Text>
          <Text style={[styles.text, styles.userNameText]}>User</Text>
        </View>
        <View style={styles.topIconsView}>
          <Link href="/settings">
            <Octicons name="gear" size={moderateScale(24)} color="lightgray" />
          </Link>
          <Link href="/notifications">
            <Octicons
              name="bell-fill"
              size={moderateScale(24)}
              color="lightgray"
            />
          </Link>
        </View>
      </View>
      <View style={styles.searchBarView}>
        <SearchBar />
      </View>
      <View style={styles.chipsView}>
        <Chip style={styles.chip}>
          <Text style={styles.chipText}>UI/UX</Text>
        </Chip>
        <Chip style={styles.chip}>
          <Text style={styles.chipText}>Graphic Design</Text>
        </Chip>
        <Chip style={styles.chip}>
          <Text style={styles.chipText}>Figma</Text>
        </Chip>
      </View>
      <View style={styles.continueView}>
        <Text style={styles.continueWatchingText}>Continue Watching</Text>
        <Text style={styles.seeAllText}>See All</Text>
      </View>
      <FlatList
        data={courses}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={(item: Course) => `${item.id}`}
        numColumns={2}
        contentContainerStyle={styles.flatList}
      />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { justifyContent: "center" },
  topView: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "stretch",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: moderateScale(9),
    paddingHorizontal: moderateScale(9),
  },
  welcomeUserView: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  topIconsView: {
    flexDirection: "row",
    alignSelf: "flex-end",
    columnGap: moderateScale(9),
  },
  searchBarView: {
    alignItems: "center",
    marginVertical: moderateScale(12),
  },
  text: {
    fontSize: moderateScale(20),
    fontWeight: "600",
  },
  welcomeText: { color: "#000" },
  userNameText: { color: "#003096" },
  chipsView: {
    flexDirection: "row",
    columnGap: moderateScale(9),
    rowGap: moderateScale(9),
    marginVertical: moderateScale(12),
    alignItems: "center",
  },
  chip: {
    width: scale(96),
    height: verticalScale(30),
    flex: 1,
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: moderateScale(12),
    marginHorizontal: moderateScale(12),
  },
  chipText: {
    fontSize: moderateScale(14),
    lineHeight: moderateScale(17.64),
    textAlign: "center",
    fontWeight: "400",
  },
  continueView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: moderateScale(6),
  },
  continueWatchingText: {
    fontSize: moderateScale(16),
    fontWeight: 700,
  },
  seeAllText: {
    color: "#B7B0B0",
    fontSize: moderateScale(16),
    fontWeight: "500",
  },
  flatList: {
    justifyContent: "space-between",
    alignItems: "center",
  },
});

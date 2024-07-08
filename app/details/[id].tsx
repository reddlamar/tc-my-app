import { StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Container from "@/components/Container";
import CourseDetailsHero from "@/components/CourseDetailsHero";
import Overview from "@/screens/Overview";
import Lessons from "@/screens/Lessons";
import Reviews from "@/screens/Reviews";

const Tab = createMaterialTopTabNavigator();

const CourseDetails = () => {
  const { id } = useLocalSearchParams();
  const courseID = typeof id === "string" ? parseInt(id) : null;

  return (
    <Container>
      <CourseDetailsHero />
      <Tab.Navigator>
        <Tab.Screen
          name="course-overview"
          component={Overview}
          initialParams={{ courseID }}
          options={{
            tabBarLabel: "Overview",
          }}
        />
        <Tab.Screen
          name="lessons"
          component={Lessons}
          initialParams={{ courseID }}
          options={{
            tabBarLabel: "Lessons",
          }}
        />
        <Tab.Screen
          name="reviews"
          component={Reviews}
          initialParams={{ courseID }}
          options={{ tabBarLabel: "Reviews" }}
        />
      </Tab.Navigator>
    </Container>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 9,
  },
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

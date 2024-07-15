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

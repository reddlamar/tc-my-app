import React from "react";
import { useLocalSearchParams } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Container from "@/components/Container";
import CourseDetailsHero from "@/components/CourseDetailsHero";
import Overview from "@/screens/Overview";
import Lessons from "@/screens/Lessons";
import Reviews from "@/screens/Reviews";
import { useGetCourse } from "@/hooks/useGetCourse";

const Tab = createMaterialTopTabNavigator();

const CourseDetails = () => {
  const { id } = useLocalSearchParams();

  const course = useGetCourse(typeof id === "string" ? id : undefined);

  return (
    <Container>
      <CourseDetailsHero />
      <Tab.Navigator>
        <Tab.Screen
          name="course-overview"
          component={Overview}
          initialParams={{ course }}
          options={{
            tabBarLabel: "Overview",
          }}
        />
        <Tab.Screen
          name="lessons"
          component={Lessons}
          initialParams={{ course }}
          options={{
            tabBarLabel: "Lessons",
          }}
        />
        <Tab.Screen
          name="reviews"
          component={Reviews}
          initialParams={{ course }}
          options={{ tabBarLabel: "Reviews" }}
        />
      </Tab.Navigator>
    </Container>
  );
};

export default CourseDetails;

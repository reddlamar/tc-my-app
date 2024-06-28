import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Container from "@/components/Container";
import { useGetCourse } from "@/hooks/useGetCourse";

const CourseDetails = () => {
  const { id } = useLocalSearchParams();
  const course = typeof id === "string" ? useGetCourse(parseInt(id)) : null;

  return (
    <Container style={styles.container}>
      <ScrollView>
        <View style={styles.videoView}>
          <View style={styles.videoInnerView}>
            <Image
              source={require("@/assets/images/video-poster.png")}
              style={styles.image}
            />
            <Ionicons
              name="arrow-back"
              size={24}
              color="#fff"
              style={styles.backButton}
            />
            <AntDesign
              name="play"
              size={45}
              color="#fff"
              style={styles.playButton}
            />
          </View>
        </View>
        <View style={styles.tabView}>
          <Text>Overview</Text>
          <Text>Lessons</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.detailsView}></View>
        <View style={styles.skillsView}></View>
      </ScrollView>
    </Container>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
  },
  videoView: {
    flex: 1,
  },
  videoInnerView: {
    justifyContent: "center",
    backgroundColor: "blue",
    height: 183,
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  backButton: {
    position: "absolute",
    top: 0,
    left: 9,
  },
  playButton: {
    position: "absolute",
    left: "50%",
  },
  tabView: {
    flex: 1,
    flexDirection: "row",
  },
  detailsView: {
    // flex: 1,
    backgroundColor: "green",
  },
  skillsView: {
    // flex: 1,
    backgroundColor: "red",
  },
});

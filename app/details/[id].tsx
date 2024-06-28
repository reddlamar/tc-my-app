import { Image, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Container from "@/components/Container";
import { useGetCourse } from "@/hooks/useGetCourse";
import Rating from "@/components/Rating";

const CourseDetails = () => {
  const { id } = useLocalSearchParams();
  const course = typeof id === "string" ? useGetCourse(parseInt(id)) : null;

  return (
    <Container style={styles.container}>
      <View style={styles.videoView}>
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
      <View style={styles.tabView}>
        <Text
          style={{
            backgroundColor: "blue",
            color: "white",
            paddingVertical: 6,
            paddingHorizontal: 3,
          }}
        >
          Overview
        </Text>
        <Text>Lessons</Text>
        <Text>Reviews</Text>
      </View>
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
          <Text>{course?.description}</Text>
        </View>
        <View
          style={{
            backgroundColor: "#002A9621",
            borderRadius: 20,
            paddingVertical: 12,
            paddingHorizontal: 15,
            rowGap: 9,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>80+ Lectures</Text>
            <Text>Certificates</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>8 Weeks</Text>
            <Text>10% Off</Text>
          </View>
        </View>
      </View>
      <View style={styles.skillsView}>
        <Text style={{ padding: 6 }}>Skills</Text>
      </View>
    </Container>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    padding: 9,
  },
  videoView: {
    flex: 4,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 1,
    resizeMode: "contain",
    marginTop: "11%",
  },
  backButton: {
    position: "absolute",
    top: 3,
    left: 3,
  },
  playButton: {
    position: "absolute",
  },
  tabView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "gold",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 9,
  },
  detailsView: {
    flex: 5,
    backgroundColor: "green",
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
  skillsView: {
    flex: 2,
    backgroundColor: "red",
  },
});

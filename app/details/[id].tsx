import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import Container from "@/components/Container";
import { useGetCourse } from "@/hooks/useGetCourse";
import Rating from "@/components/Rating";
import Chip from "@/components/Chip";
import Button from "@/components/Button";

const CourseDetails = () => {
  const { id } = useLocalSearchParams();
  const course = typeof id === "string" ? useGetCourse(parseInt(id)) : null;

  return (
    <Container>
      <ScrollView>
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
          <Ionicons
            name="bookmark"
            size={24}
            color="#fff"
            style={styles.bookMark}
          />
        </View>
        <View style={styles.tabView}>
          <Text
            style={{
              backgroundColor: "#003096",
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
            <Text>
              {course?.description}
              <Text style={{ color: "#003096" }}>Read More</Text>
            </Text>
          </View>
          <View style={styles.extraDetailsView}>
            <View style={styles.extraDetailsInnerView}>
              <View style={styles.extraDetailsItemView}>
                <FontAwesome6 name="book" size={17} color="#003096" />
                <Text>80+ Lectures</Text>
              </View>
              <View style={styles.extraDetailsItemView}>
                <Ionicons name="time" size={17} color="#003096" />
                <Text>8 Weeks</Text>
              </View>
            </View>
            <View style={styles.extraDetailsInnerView}>
              <View style={styles.extraDetailsItemView}>
                <FontAwesome6 name="certificate" size={17} color="#003096" />
                <Text>Certificates</Text>
              </View>
              <View style={styles.extraDetailsItemView}>
                <Ionicons name="pricetag" size={17} color="#003096" />
                <Text>10% Off</Text>
              </View>
            </View>
          </View>
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
        <Button buttonStyle={styles.buttonStyle}>
          <Text style={styles.buttonText}>Enroll Now</Text>
        </Button>
      </ScrollView>
    </Container>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  videoView: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "blue",
    height: 250,
  },
  image: {
    width: "100%",
    height: 250,
    aspectRatio: 1,
    resizeMode: "contain",
    position: "absolute",
    top: 0,
  },
  backButton: {
    position: "absolute",
    top: 3,
    left: 3,
  },
  playButton: {
    position: "absolute",
    top: "50%",
  },
  bookMark: {
    position: "absolute",
    top: 3,
    right: 3,
  },
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
  buttonStyle: {
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 9,
    paddingHorizontal: 9,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 25.2,
    textAlign: "center",
  },
});

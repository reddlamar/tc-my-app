import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { Link } from "expo-router";
import { Octicons } from "@expo/vector-icons";
import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import Chip from "@/components/Chip";
import Card from "@/components/Card";
import { courses } from "@/database/Courses";
import { Course } from "@/types/CourseType";

const HomeScreen = () => {
  const renderItem = useCallback((item: Course) => {
    return (
      <Link href={`/details/${item.id}`}>
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

  return (
    <Container style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.welcomeUserView}>
          <Text style={[styles.text, styles.welcomeText]}>Welcome, </Text>
          <Text style={[styles.text, styles.userNameText]}>User</Text>
        </View>
        <View style={styles.topIconsView}>
          <Link href="/settings">
            <Octicons name="gear" size={24} color="lightgray" />
          </Link>
          <Link href="/notifications">
            <Octicons name="bell-fill" size={24} color="lightgray" />
          </Link>
        </View>
      </View>
      <SearchBar />
      <View style={styles.chipsView}>
        <Chip>
          <Text>UI/UX</Text>
        </Chip>
        <Chip>
          <Text>Graphic Design</Text>
        </Chip>
        <Chip>
          <Text>Figma</Text>
        </Chip>
      </View>
      <View style={styles.continueView}>
        <Text style={styles.continueWatchingText}>Continue Watching</Text>
        <Text style={styles.seeAllText}>See All</Text>
      </View>
      <FlatList
        data={courses}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item: Course) => `${item.id}`}
        numColumns={2}
        contentContainerStyle={{
          marginHorizontal: 9,
          rowGap: 9,
        }}
      />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    paddingHorizontal: 9,
    rowGap: 9,
  },
  topView: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "stretch",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 9,
    paddingHorizontal: 9,
  },
  welcomeUserView: { flexDirection: "row", alignSelf: "flex-start" },
  topIconsView: {
    flexDirection: "row",
    alignSelf: "flex-end",
    columnGap: 9,
  },
  text: { fontSize: 20, fontWeight: 600 },
  welcomeText: { color: "#000" },
  userNameText: { color: "#003096" },
  chipsView: { flexDirection: "row", columnGap: 9 },
  continueView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 6,
  },
  continueWatchingText: { fontSize: 16, fontWeight: 700 },
  seeAllText: { color: "#B7B0B0", fontSize: 16, fontWeight: 500 },
});

import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types";

const CourseDetailsHero = () => {
  const navigation = useNavigation<NativeStackNavigatorProps>();

  return (
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
        onPress={() => navigation.navigate("(tabs)")}
      />
      <AntDesign name="play" size={45} color="#fff" style={styles.playButton} />
      <Ionicons
        name="bookmark"
        size={24}
        color="#fff"
        style={styles.bookMark}
      />
    </View>
  );
};

export default CourseDetailsHero;

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
});

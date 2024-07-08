import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Section from "./Section";
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Chapter } from "@/types/CourseType";

type LessonProps = {
  chapter: Chapter;
};

const Lesson = ({ chapter }: LessonProps) => {
  const [expanded, setExpanded] = useState(false);
  const height = useSharedValue<number>(0);
  const opacity = useSharedValue<number>(0);

  const config = {
    duration: 750,
    easing: Easing.inOut(Easing.quad),
    reduceMotion: ReduceMotion.System,
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, config),
      height: withTiming(height.value, config),
    };
  });

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setExpanded(!expanded);
          if (height.value && opacity.value) {
            height.value = 0;
            opacity.value = 0;
          } else {
            height.value = 175;
            opacity.value = 1;
          }
        }}
      >
        <Section style={{ alignItems: "center" }}>
          <Text>{chapter.title}</Text>
        </Section>
      </Pressable>
      {expanded && (
        <Animated.View style={animatedStyle}>
          <Section style={styles.section}>
            <Text>{chapter.notes}</Text>
          </Section>
        </Animated.View>
      )}
    </View>
  );
};

export default Lesson;

const styles = StyleSheet.create({
  container: { rowGap: 12, alignItems: "center" },
  section: { height: 175 },
});

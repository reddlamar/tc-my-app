import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { RatingProps } from "@/types/PropsType";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const Rating = ({ rating = 0 }: RatingProps) => {
  const renderStars = useCallback(() => {
    const stars = [];
    for (let num = 0; num < rating; num++) {
      stars.push(
        <MaterialIcons
          key={num + 1}
          name="star"
          size={12}
          color={Colors.light.tint}
        />
      );
    }
    return stars;
  }, [rating]);

  return (
    <View>
      <Text>{renderStars()}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});

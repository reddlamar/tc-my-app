import { StyleSheet, Text, View, Image, ImageURISource } from "react-native";
import React, { useCallback } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { Colors } from "@/constants/Colors";

type CardProps = {
  id: number;
  imageSource: ImageURISource;
  title: string;
  rating: number;
  author: string;
  progressPercentage: number;
};

const Card = (props: CardProps) => {
  const { id, imageSource, title, rating, author, progressPercentage } = props;

  const getStars = useCallback(() => {
    const stars = [];
    for (let num = 0; num < rating; num++) {
      stars.push(<MaterialIcons name="star" size={12} color="navy-blue" />);
    }
    return stars;
  }, [rating]);

  return (
    <View style={styles.view} key={id}>
      <View style={styles.imageView}>
        <Image
          source={imageSource}
          resizeMethod="scale"
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.bottomContentView}>
        <View style={styles.titleView}>
          <Text>{title}</Text>
          <View style={styles.starsView}>{getStars()}</View>
        </View>
        <View style={styles.authorView}>
          <Text style={styles.text}>By {author}</Text>
          <View style={styles.progressView}>
            <Text style={[styles.text, styles.progressText]}>
              {progressPercentage}% Done
            </Text>
            <Progress.Bar
              progress={progressPercentage / 100}
              width={174}
              color={Colors.light.tint}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  view: {
    width: 174,
    rowGap: 12,
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  imageView: {
    width: 174,
    height: 174,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  bottomContentView: {
    rowGap: 6,
  },
  titleView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  starsView: { flexDirection: "row" },
  authorView: {
    rowGap: 9,
  },
  progressView: {
    width: "100%",
  },
  progressText: {
    alignSelf: "flex-end",
  },
  text: {
    fontSize: 10,
    fontWeight: 400,
    lineHeight: 12.6,
    color: "#B7B0B0",
  },
});

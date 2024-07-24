import { StyleSheet, Text, View, Image, ImageURISource } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { Colors } from "@/constants/Colors";
import Rating from "./Rating";
import { CardProps } from "@/types/PropsTypes";

const Card = (props: CardProps) => {
  const { imageSource, title, rating, author, progressPercentage } = props;

  return (
    <View style={styles.view}>
      <View style={styles.imageView}>
        <Image
          source={{
            uri: imageSource,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.bottomContentView}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.starsView}>
            <Rating rating={rating} />
          </View>
        </View>
        <View style={styles.authorView}>
          <Text style={styles.text}>By {author}</Text>
          <View style={styles.progressView}>
            <Text style={[styles.text, styles.progressText]}>
              {progressPercentage}% Done
            </Text>
            <Progress.Bar
              progress={progressPercentage / 100}
              color={Colors.light.tint}
              width={moderateScale(150)}
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
    rowGap: moderateScale(12),
    width: scale(130),
    margin: moderateScale(9),
    justifyContent: "center",
    alignItems: "center",
  },
  imageView: {
    width: scale(150),
    height: verticalScale(150),
    borderRadius: moderateScale(10),
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: moderateScale(120),
    borderRadius: moderateScale(10),
    aspectRatio: 1,
    resizeMode: "cover",
  },
  bottomContentView: {
    rowGap: moderateScale(6),
    flexWrap: "wrap",
    width: moderateScale(144),
  },
  titleView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    fontSize: moderateScale(10),
    lineHeight: moderateScale(16.38),
    fontWeight: "600",
  },
  starsView: { flexDirection: "row" },
  authorView: {
    rowGap: moderateScale(9),
  },
  progressView: {
    width: "100%",
  },
  progressText: {
    alignSelf: "flex-end",
  },
  text: {
    fontSize: moderateScale(10),
    fontWeight: "400",
    lineHeight: moderateScale(12.6),
    color: "#B7B0B0",
  },
});

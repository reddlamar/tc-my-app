import { Dimensions } from "react-native";

export const scaleFactor = 1.5;

export const baseWidth = 375;
export const baseHeight = 667;

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

export const horizontalScale = (size: number) => {
  if (windowWidth > baseWidth) {
    return size * scaleFactor;
  }
  return size;
};

export const verticalScale = (size: number) => {
  if (windowHeight > baseHeight) {
    return size * scaleFactor;
  }
  return size;
};

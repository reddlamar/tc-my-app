import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import { AppInfo } from "./AppInfoType";
import { Link } from "expo-router";

export type ButtonProps = {
  screenIndex: React.MutableRefObject<number>;
  screens: AppInfo[];
  updateAppInfoScreen: (appInfoScreen: AppInfo) => void;
  updateAppInfoScreens: (appInfoScreens: AppInfo[]) => void;
};

export type ButtonLinkProps = React.ComponentProps<typeof Link> & {
  href: string;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

export type CustomButtonProps = React.ComponentProps<typeof Pressable> & {
  onPress: (e: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

export type ProgressCirclesProps = {
  appInfoScreens: AppInfo[];
};

export type RatingProps = {
  rating: number;
};

export type SectionProps = React.ComponentProps<typeof View> & {
  children: React.ReactNode;
};

import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { AppInfo } from "./AppInfoType";
import { Link } from "expo-router";
import { Chapter, Course } from "./CourseType";

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

export type CardProps = {
  imageSource: string;
  title: string;
  rating: number;
  author: string;
  progressPercentage: number;
};

export type ChipProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export type CircleProps = {
  size?: number;
  color?: string;
};

export type CourseProps = {
  course: Course;
};

export type ConfirmPasswordInputProps = Pick<
  PasswordInputProps,
  | "confirmPassword"
  | "hidePassword"
  | "onChangeConfirmPassword"
  | "onPressHidePassword"
>;

export type CustomButtonProps = React.ComponentProps<typeof Pressable> & {
  onPress: (e: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

export type ErrorMessageProps = {
  error: string;
};

export type HeaderProps = {
  screen?: string;
  title?: string;
  iconColor?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
};

export type InputProps = TextInputProps & {
  label: string;
  hidePassword?: boolean;
  value: string;
  onChangeText: (text: string) => void;
};

export type LessonProps = {
  chapter: Chapter;
};

export type LoadingIndicatorProps = {
  text?: string;
  size?: number;
};

export type PasswordInputProps = {
  password: string;
  onChangePassword: (text: string) => void;
  passwordLabel?: string;
  confirmPassword?: string;
  onChangeConfirmPassword?: (text: string) => void;
  hidePassword: boolean;
  onPressHidePassword: (hide: boolean) => void;
};

export type PaymentStepsProps = {
  activeStep1: boolean;
  activeStep2: boolean;
  activeStep3: boolean;
  onPressCircle1: (e: GestureResponderEvent) => void;
  onPressCircle2: (e: GestureResponderEvent) => void;
  onPressCircle3: (e: GestureResponderEvent) => void;
};

export type ProgressCirclesProps = {
  appInfoScreens: AppInfo[];
};

export type RatingProps = {
  rating: number;
};

export type RegisterProps = {
  registerTitle?: string;
  registerSubTitle: string;
  registerText: string;
  socialRegisterText: string;
  orRegisterText: string;
  registerQuestionText: string;
  registerHereText: string;
  children: React.ReactNode;
  registerHereHref: string;
};

export type SectionProps = React.ComponentProps<typeof View> & {
  children: React.ReactNode;
};

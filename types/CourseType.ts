import { ImageURISource } from "react-native";

export type Course = {
  id: number;
  image: ImageURISource;
  title: string;
  rating: number;
  author: string;
  progressPercentage: number;
  price: number;
  description: string;
  skills: string[];
  lessons: Chapter[];
  reviews: Review[];
};

export type Chapter = {
  id: number;
  title: string;
  videos: string[];
  notes: string[];
};

export type Review = {
  id: number;
  userName: string;
  userType: string;
  text: string;
  rating: number;
};

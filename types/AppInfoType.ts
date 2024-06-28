import { ImageURISource } from "react-native";

export type AppInfo = {
  id: number;
  title: string;
  subTitle: string;
  image: ImageURISource;
  active: boolean;
};

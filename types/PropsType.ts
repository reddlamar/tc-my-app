import { AppInfo } from "./AppInfoType";

export type ButtonProps = {
  screenIndex: React.MutableRefObject<number>;
  screens: AppInfo[];
  updateAppInfoScreen: (appInfoScreen: AppInfo) => void;
  updateAppInfoScreens: (appInfoScreens: AppInfo[]) => void;
};

export type ProgressCirclesProps = {
  appInfoScreens: AppInfo[];
};

export type RatingProps = {
  rating: number;
};

import { AppInfo } from "@/types/AppInfoType";

export const appInfo: AppInfo[] = [
  {
    id: 1,
    title: "Welcome to IT Group where learning meets innovation!",
    subTitle:
      "Empowering your journey through cutting-edge IT education and expertise",
    image: require("../assets/images/welcome.png"),
    active: true,
  },
  {
    id: 2,
    title: "Begin your learning journey and unlock a world of knowledge",
    subTitle:
      "Explore our comprehensive courses designed to transform your skills and career",
    image: require("../assets/images/learning.png"),
    active: false,
  },
  {
    id: 3,
    title: "Dive into a seamless learning experience with IT Group",
    subTitle:
      "Experience interactive learning with expert-led courses and progress tracking",
    image: require("../assets/images/dive.png"),
    active: false,
  },
  {
    id: 4,
    title: "Join a community of learners and embark on a learning adventure",
    subTitle:
      "Connect with like-minded individuals Join us to learn, grow, and thrive together!",
    image: require("../assets/images/community.png"),
    active: false,
  },
  {
    id: 5,
    title: "Join IT Group to Kick Start Your Lesson",
    subTitle: "Join and Learn from our Top Instructors!",
    image: require("../assets/images/join.png"),
    active: false,
  },
];

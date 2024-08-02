import { Course } from "./CourseType";

export type Member = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  courses: Course[];
  reviews: Review[];
};

export type Review = {
  id: number;
  courseId: string;
  text: string;
  rating: number;
};

import { createContext, useState } from "react";
import { Course } from "@/types/CourseType";

type CourseContextType = {
  course: Course | null;
  courses: Course[];
  setCourse: Function;
  setCourses: Function;
};

export const CourseContext = createContext<CourseContextType>({
  course: null,
  courses: [],
  setCourse: () => {},
  setCourses: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const CourseProvider = ({ children }: Props) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);

  return (
    <CourseContext.Provider value={{ course, courses, setCourse, setCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

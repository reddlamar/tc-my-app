import { createContext, useState } from "react";
import { Course } from "@/types/CourseType";

type CourseContextType = {
  course: Course | null;
  setCourse: Function;
};

export const CourseContext = createContext<CourseContextType>({
  course: null,
  setCourse: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const CourseProvider = ({ children }: Props) => {
  const [course, setCourse] = useState<any>({ title: "My Book" });

  return (
    <CourseContext.Provider value={{ course, setCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

import { Course } from "@/types/CourseType";
import { useState, useEffect } from "react";
import { courses } from "@/database/Courses";
export const useGetCourse = (id: number) => {
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    let foundCourse: Course | undefined;
    if (typeof id === "string") {
      foundCourse = courses.find((c) => c.id === id);
    }

    if (foundCourse) {
      setCourse(foundCourse);
    }
  }, [id]);

  return course;
};

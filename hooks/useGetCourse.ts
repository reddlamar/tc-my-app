import { useEffect, useContext, useState } from "react";

import { Course } from "@/types/CourseType";
import { CourseContext } from "@/context/CourseContext";

export const useGetCourse = (id: string) => {
  const { course, courses, setCourse } = useContext(CourseContext);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log("Courses", courses);

  useEffect(() => {
    setIsLoading(true);

    let foundCourse: Course | undefined = courses.find(
      (c: Course) => c.id === id
    );

    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      setError("Can not find selected course.");
    }

    setIsLoading(false);
  }, [id]);

  return { course, error, isLoading };
};

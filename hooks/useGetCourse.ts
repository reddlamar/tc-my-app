import { Course } from "@/types/CourseType";

import { useAppSelector } from "./useRedux";
import { selectCourseByID } from "@/features/redux/courses/coursesSlice";

export const useGetCourse = (id: string | undefined) => {
  let course: Course | undefined = useAppSelector((state) => {
    if (id) {
      return selectCourseByID(state, id);
    }
    return undefined;
  });

  return course;
};

import { useEffect } from "react";

import {
  getCourses,
  selectCourses,
  selectError,
} from "@/features/redux/courses/coursesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

export const useGetCourses = () => {
  const error = useAppSelector(selectError);
  const courses = useAppSelector(selectCourses);
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.coursesSlice.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getCourses());
    }
  }, [status, dispatch]);

  return { courses, error, status };
};

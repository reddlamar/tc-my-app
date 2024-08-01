import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Course } from "@/types/CourseType";
import { getCoursesCollection } from "@/features/firebase/firestore/Courses";

interface CoursesSlice {
  courses: Course[];
  course: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CoursesSlice = {
  courses: [],
  course: null,
  status: "idle",
  error: null,
};

export const getCourses = createAsyncThunk("courses/getCourses", async () => {
  const collection = await getCoursesCollection();
  return collection;
});

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getCourses.fulfilled,
        (state, action: PayloadAction<Course[]>) => {
          state.status = "succeeded";
          state.courses = state.courses.concat(action.payload);
        }
      )
      .addCase(getCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export const selectCourses = (state: RootState) => state.coursesSlice.courses;
export const selectError = (state: RootState) => state.coursesSlice.error;
export const selectCourseByID = (state: RootState, courseId: string) =>
  state.coursesSlice.courses.find((course: Course) => course.id === courseId);
export const selectCourse = (state: RootState) => {
  return state.coursesSlice.course;
};

export default coursesSlice.reducer;

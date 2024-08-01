import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses/coursesSlice";
import { getCoursesCollection } from "../firebase/firestore/Courses";

export const store = configureStore({
  reducer: {
    coursesSlice: coursesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: getCoursesCollection,
      },
    }),
});

// Infer the 'RootState' and 'AppDispatch' types from the store
export type RootState = ReturnType<typeof store.getState>;

// Infer type:
export type AppDispatch = typeof store.dispatch;

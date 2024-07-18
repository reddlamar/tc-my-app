import { courses } from "../database/Courses";
import { addCourse } from "@/features/firebase/firestore/Courses";
import { getImageUrlFromStorage } from "@/features/firebase/Storage/Image";

export function populate() {
  let success = false;

  courses.forEach((c) => {
    success = populateCourses(c);
  });

  if (success) {
    console.log("Successfully populated Courses Collection.");
  } else {
    console.log("Failed to populate Courses Collection.");
  }
}

async function populateCourses(course) {
  let newCourse = {};

  try {
    const url = await getImageUrlFromStorage(course);
    newCourse = {
      ...course,
      image: url,
    };
    addCourse(newCourse);
  } catch (e) {
    console.log("Create course Error: ", e);
  }
}

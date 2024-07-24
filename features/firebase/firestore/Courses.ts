import { firebaseDB } from "@/features/firebase/Config";
import { Course } from "@/types/CourseType";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

const coursesRef = collection(firebaseDB, "courses");

export async function addCourse(course: Course) {
  let success = true;
  try {
    const docRef = await addDoc(collection(firebaseDB, "courses"), course);
    console.log("Document successfully written with ID: ", docRef.id);
  } catch (e) {
    console.log("Error populating courses: ", e);
    success = false;
  }
  return success;
}

export async function getCourses() {
  try {
    const querySnapshot = await getDocs(coursesRef);
    return querySnapshot.docs;
  } catch (e) {
    console.log("Error getting courses:", e);
    return [];
  }
}

export async function getCoursesOrderedByTitle() {
  try {
    const coursesQuery = query(coursesRef, orderBy("title"));
    const querySnapshot = await getDocs(coursesQuery);
    return querySnapshot.docs;
  } catch (e) {
    console.log("Error getting courses ordered by title:", e);
    return [];
  }
}

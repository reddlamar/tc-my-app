import { database } from "@/features/firebase/Config";
import { Course } from "@/types/CourseType";
import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  orderBy,
  Query,
  query,
} from "firebase/firestore";

const coursesRef = collection(database, "courses");

export async function addCourse(course: Course) {
  let success = true;
  try {
    const docRef = await addDoc(collection(database, "courses"), course);
    console.log("Document successfully written with ID: ", docRef.id);
  } catch (e) {
    console.log("Error populating courses: ", e);
    success = false;
  }
  return success;
}

export async function getCourses(query?: Query<DocumentData, DocumentData>) {
  try {
    const querySnapshot = await getDocs(query ? query : coursesRef);
    return querySnapshot.docs;
  } catch (e) {
    console.log("Error getting courses:", e);
    return [];
  }
}

export async function getCoursesOrderedByTitle() {
  try {
    const coursesQuery = query(coursesRef, orderBy("title"));
    const courses = await getCourses(coursesQuery);
    return courses;
  } catch (e) {
    console.log("Error getting courses ordered by title:", e);
    return [];
  }
}

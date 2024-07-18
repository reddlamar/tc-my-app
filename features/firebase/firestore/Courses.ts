import { firebaseDB } from "@/features/firebase/Config";
import { Course } from "@/types/CourseType";
import { collection, addDoc } from "firebase/firestore";

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

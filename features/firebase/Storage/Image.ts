import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/features/firebase/Config";
import { Course } from "@/types/CourseType";

export async function getImageUrlFromStorage(course: Course) {
  return await getDownloadURL(ref(storage, `image/${course.image}`));
}

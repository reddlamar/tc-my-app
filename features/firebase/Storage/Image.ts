import { ref, getDownloadURL } from "firebase/storage";
import { firebaseStorage } from "@/features/firebase/Config";
import { Course } from "@/types/CourseType";

export async function getImageUrlFromStorage(course: Course) {
  return await getDownloadURL(ref(firebaseStorage, `image/${course.image}`));
}

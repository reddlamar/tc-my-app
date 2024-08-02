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
  QueryDocumentSnapshot,
} from "firebase/firestore";

const coursesRef = collection(database, "courses");

export async function addCourse(course: Course) {
  let success = true;
  try {
    const docRef = await addDoc(coursesRef, course);
    console.log("Document successfully written with ID: ", docRef.id);
  } catch (e) {
    console.log("Error populating courses: ", e);
    success = false;
  }
  return success;
}

export async function getCoursesOrderedByTitle() {
  try {
    const coursesQuery = query(coursesRef, orderBy("title"));
    return await getCoursesCollection(coursesQuery);
  } catch (e) {
    console.log("Error getting courses ordered by title:", e);
    return [];
  }
}

export async function getCoursesCollection(
  query?: Query<DocumentData, DocumentData>
) {
  try {
    const querySnapshot = await getDocs(query ? query : coursesRef);
    return mapCourses(querySnapshot.docs);
  } catch (e) {
    console.log("Error getting courses:", e);
    return [];
  }
}

function mapCourses(
  documents: QueryDocumentSnapshot<DocumentData, DocumentData>[]
): Course[] {
  const mappedCourses = documents.map((d) => createCourse(d.id, d.data()));
  return mappedCourses;
}

function createCourse(id: string, course: DocumentData): Course {
  return {
    id: id,
    author: course.author,
    description: course.description,
    image: course.image,
    lessons: course.lessons,
    price: course.price,
    progressPercentage: course.progressPercentage,
    rating: course.rating,
    reviews: course.reviews,
    skills: course.skills,
    title: course.title,
  };
}

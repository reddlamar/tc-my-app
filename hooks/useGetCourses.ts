import { useEffect, useState, useContext } from "react";

import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

import { CourseContext } from "@/context/CourseContext";
import { getCoursesOrderedByTitle } from "@/features/firebase/firestore/Courses";

export const useGetCourses = () => {
  const { courses, setCourses } = useContext(CourseContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    getCourses();

    async function getCourses() {
      setIsLoading(true);
      try {
        const docs = await getCoursesOrderedByTitle();
        const courseCollection = mapCourses(docs);
        setCourses(courseCollection);
      } catch (e) {
        console.log("Error getting courses: ", e);
        setError(e);
      }
      setIsLoading(false);
    }

    const mapCourses = (
      documents: QueryDocumentSnapshot<DocumentData, DocumentData>[]
    ) => {
      const MappedCourses = documents.map((d) => createCourse(d.id, d.data()));
      return MappedCourses;
    };

    const createCourse = (id: string, course: DocumentData) => {
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
    };
  }, []);

  return { courses, error, isLoading };
};

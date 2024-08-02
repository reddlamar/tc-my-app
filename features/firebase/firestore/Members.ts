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
import { database } from "@/features/firebase/Config";
import { Member } from "@/types/MemberType";

const membersRef = collection(database, "members");

export async function addMember(member: Member) {
  let success = true;
  try {
    const docRef = await addDoc(membersRef, member);
    console.log("Document successfully added with ID: ", docRef.id);
  } catch (e) {
    console.log("Error adding member: ", e);
    success = false;
  }
  return success;
}

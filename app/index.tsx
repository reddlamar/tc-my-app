import { useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";

import { moderateScale } from "react-native-size-matters";

import { collection, getDocs } from "firebase/firestore";

import Container from "@/components/Container";
import IntroScreen from "@/screens/Intro";

import { populate } from "@/scripts/populate-courses";
import { firebaseDB } from "@/features/firebase/Config";

export default function MainIntroScreen() {
  const addDocuments = async () => {
    try {
      populate();
    } catch (e) {
      console.log("Error adding document:", e);
    }
  };

  useEffect(() => {
    const populateCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(firebaseDB, "courses"));
        if (querySnapshot.docs.length === 0) {
          addDocuments();
        }
      } catch (e) {
        console.log("Error checking courses population: ", e);
      }
    };
    populateCourses();
  }, []);

  return (
    <Container style={styles.container}>
      <ScrollView>
        <IntroScreen />
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: moderateScale(8),
  },
});

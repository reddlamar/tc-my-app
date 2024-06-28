import { StyleSheet, ScrollView, View, SafeAreaView } from "react-native";
import Container from "@/components/Container";
import IntroScreen from "@/screens/Intro";

export default function MainIntroScreen() {
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
    gap: 8,
  },
});

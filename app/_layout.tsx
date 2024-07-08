import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { CourseProvider } from "@/context/CourseContext";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <CourseProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="sign-in"
            options={{ headerBackTitleVisible: false, headerTitle: "Sign In" }}
          />
          <Stack.Screen
            name="sign-up"
            options={{ headerBackTitleVisible: false, headerTitle: "Sign Up" }}
          />
          <Stack.Screen
            name="reset-password"
            options={{ headerBackTitleVisible: false, headerTitle: "" }}
          />
          <Stack.Screen
            name="reset-password-success"
            options={{ headerBackTitleVisible: false, headerTitle: "" }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="details/[id]" options={{ headerShown: false }} />
          <Stack.Screen
            name="payment"
            options={{ title: "", headerBackTitleVisible: false }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </CourseProvider>
  );
}

import React, { useEffect } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useNavigation } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { moderateScale } from "react-native-size-matters";
import { Octicons } from "@expo/vector-icons";

import { CourseProvider } from "@/context/CourseContext";

import { useColorScheme } from "@/hooks/useColorScheme";
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types";
import Header from "@/components/Header";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

type RootHeaderProps = {
  title: string;
  gearIconColor: string;
  bellIconColor: string;
};

const RootHeader = ({
  title,
  gearIconColor,
  bellIconColor,
}: RootHeaderProps) => {
  const navigation = useNavigation<NativeStackNavigatorProps>();
  const iconSize = moderateScale(21);

  return (
    <Header title={title} screen="(tabs)">
      <View style={styles.notificationsHeaderInnerContainer}>
        <Octicons
          name="gear"
          size={iconSize}
          color={gearIconColor}
          onPress={() => navigation.navigate("settings")}
        />
        <Octicons
          name="bell-fill"
          size={iconSize}
          color={bellIconColor}
          onPress={() => navigation.navigate("notifications")}
        />
      </View>
    </Header>
  );
};

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
      <ThemeProvider value={DefaultTheme}>
        <SafeAreaView style={styles.view}>
          <Stack initialRouteName="index">
            <Stack.Screen
              name="index"
              options={{
                headerShown: false,
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name="sign-in"
              options={{
                header: () => <Header />,
              }}
            />
            <Stack.Screen
              name="sign-up"
              options={{ header: () => <Header /> }}
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
            <Stack.Screen
              name="details/[id]"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="payment"
              options={{ header: () => <Header /> }}
            />
            <Stack.Screen
              name="notifications"
              options={{
                header: () => (
                  <RootHeader
                    title="Notifications"
                    gearIconColor="#DCDEE0"
                    bellIconColor="#06367E"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="settings"
              options={{
                header: () => (
                  <RootHeader
                    title="Settings"
                    gearIconColor="#06367E"
                    bellIconColor="#DCDEE0"
                  />
                ),
              }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
        </SafeAreaView>
      </ThemeProvider>
    </CourseProvider>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1 },
  notificationsHeaderInnerContainer: {
    flexDirection: "row",
    columnGap: moderateScale(9),
    marginRight: moderateScale(9),
  },
});

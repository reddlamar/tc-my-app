import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Header from "@/components/Header";
import { horizontalScale } from "@/constants/WindowDimensions";
import { SafeAreaView, StyleSheet } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const iconSize = horizontalScale(24);

  return (
    <SafeAreaView style={styles.view}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors["light"].tint,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tabs.Screen
          name="my-courses"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "head-cog" : "head-cog-outline"}
                color={color}
                size={iconSize}
              />
            ),
            headerShown: true,
            header: () => <Header title="My Courses" screen="index" />,
          }}
        />
        <Tabs.Screen
          name="inbox"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"}
                color={color}
                size={iconSize}
              />
            ),
            headerShown: true,
            header: () => <Header title="Inbox" screen="index" />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "person" : "person-outline"}
                color={color}
                size={iconSize}
              />
            ),
            headerShown: true,
            header: () => <Header title="Profile" screen="index" />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

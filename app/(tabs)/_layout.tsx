import { Tabs, useNavigation } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaView, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types";
import Header from "@/components/Header";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation<NativeStackNavigatorProps>();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
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
              size={24}
            />
          ),
          headerShown: true,
          header: () => <Header title="My Courses" />,
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"}
              color={color}
              size={24}
            />
          ),
          headerShown: true,
          header: () => <Header title="Inbox" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
              size={24}
            />
          ),
          headerShown: true,
          header: () => <Header title="Profile" />,
        }}
      />
    </Tabs>
  );
}

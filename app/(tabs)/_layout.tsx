import { Tabs, useNavigation } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/Colors";
import Header from "@/components/Header";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types";

export default function TabLayout() {
  const iconSize = moderateScale(15);
  const navigation = useNavigation<NativeStackNavigatorProps>();

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
                size={iconSize}
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
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingRight: 12,
                }}
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
            header: () => (
              <Header title="Profile" screen="index">
                <Button
                  title="Sign Out"
                  onPress={() => navigation.navigate("sign-in")}
                  color={Colors.light.tint}
                />
              </Header>
            ),
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

import { StyleSheet, Text, View, SafeAreaView, ViewStyle } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types";
import { Ionicons } from "@expo/vector-icons";

type HeaderProps = {
  title?: string;
  iconColor?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
};

const Header = ({ title, iconColor, children, style }: HeaderProps) => {
  const navigation = useNavigation<NativeStackNavigatorProps>();

  return (
    <SafeAreaView style={[styles.notificationsHeaderContainer, style]}>
      <View style={styles.notificationsHeaderInnerContainer}>
        <Ionicons
          name="arrow-back"
          size={24}
          color={iconColor ?? "#000"}
          onPress={() => navigation.navigate("(tabs)")}
        />
        {title && <Text style={styles.text}>{title}</Text>}
      </View>
      {children ?? null}
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  notificationsHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  notificationsHeaderInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 9,
    paddingVertical: 12,
    // width: "100%",
  },
  text: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 27.72,
    textAlign: "center",
  },
});

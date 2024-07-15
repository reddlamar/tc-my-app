import { StyleSheet, Text, View, SafeAreaView, ViewStyle } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { NativeStackNavigatorProps } from "react-native-screens/lib/typescript/native-stack/types";
import { Ionicons } from "@expo/vector-icons";
import { horizontalScale, verticalScale } from "@/constants/WindowDimensions";

type HeaderProps = {
  screen?: string;
  title?: string;
  iconColor?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
};

const Header = ({ title, iconColor, screen, children, style }: HeaderProps) => {
  const navigation = useNavigation<NativeStackNavigatorProps>();

  return (
    <SafeAreaView style={[styles.notificationsHeaderContainer, style]}>
      <View style={styles.notificationsHeaderInnerContainer}>
        <Ionicons
          name="arrow-back"
          size={horizontalScale(24)}
          color={iconColor ?? "#000"}
          onPress={() =>
            screen ? navigation.navigate(screen) : navigation.goBack()
          }
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
    padding: horizontalScale(12),
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  notificationsHeaderInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: horizontalScale(9),
    paddingVertical: verticalScale(12),
  },
  text: {
    fontSize: horizontalScale(22),
    fontWeight: "600",
    lineHeight: verticalScale(27.72),
    textAlign: "center",
  },
});

import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { horizontalScale, verticalScale } from "@/constants/WindowDimensions";

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <View style={styles.view}>
      <Feather name="search" size={horizontalScale(18)} color="lightgray" />
      <TextInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search Here"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    columnGap: horizontalScale(9),
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E3E3E3",
    borderRadius: horizontalScale(20),
    width: horizontalScale(345),
    height: verticalScale(30),
    paddingHorizontal: horizontalScale(9),
  },
});

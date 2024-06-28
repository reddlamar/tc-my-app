import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <View style={styles.view}>
      <Feather name="search" size={18} color="lightgray" />
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
    columnGap: 9,
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E3E3E3",
    borderRadius: 20,
    width: 345,
    height: 30,
    paddingHorizontal: 9,
  },
});

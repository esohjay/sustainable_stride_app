import React from "react";
import { View, Text } from "react-native";
import tw from "../../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";

function SettingsHeader() {
  return (
    <View style={tw` flex flex-row gap-x-3 items-baseline pt-4 pb-3`}>
      <Text style={tw`font-extrabold text-2xl text-mainColor `}>Settings</Text>
      <Ionicons name={"settings"} size={24} color="#7d4f50" />
    </View>
  );
}

export default SettingsHeader;

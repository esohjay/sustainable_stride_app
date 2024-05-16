import React from "react";
import { View, Text, Image } from "react-native";
import tw from "../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";

function AchievementStat({ icon, stat, type }) {
  return (
    <View style={tw`flex flex-row items-center gap-x-2 w-1/2`}>
      <View
        style={tw`h-10 w-10 rounded-full flex items-center justify-center bg-altColor`}
      >
        <Ionicons name={icon} size={24} color="#7d4f50" />
      </View>
      <View style={tw``}>
        <Text style={tw`text-base font-semibold text-dark`}>{stat}</Text>
        <Text style={tw`font-medium text-xs text-dark`}>{type}</Text>
      </View>
    </View>
  );
}

export default AchievementStat;

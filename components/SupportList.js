import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../lib/tailwind";

export default function SupportList({ text, icon, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={tw`flex flex-row justify-between items-center `}>
        <View style={tw`flex flex-row items-center gap-x-3`}>
          <Ionicons name={icon} size={30} color="#7d4f50" />
          <Text style={tw`text-base text-mainColor font-bold`}>{text}</Text>
        </View>
        <Ionicons name={"chevron-forward"} size={30} color="#7d4f50" />
      </View>
    </Pressable>
  );
}

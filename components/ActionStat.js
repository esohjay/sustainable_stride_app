import React from "react";
import tw from "../lib/tailwind";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function ActionStat({ bgColor, text, icon, value }) {
  return (
    <View style={tw`flex gap-x-1 items-center w-[31%]`}>
      <View
        style={tw`h-10 w-10 rounded-full bg-[${bgColor}] flex items-center justify-center `}
      >
        <Ionicons name={icon} size={24} color="#ffffff" />
      </View>
      <Text style={tw`text-xs font-semibold text-mainColor text-center `}>
        {text}
      </Text>
      <Text style={tw`text-base font-bold text-dark`}>{value}</Text>
    </View>
  );
}

export default ActionStat;

import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../lib/tailwind";

export default function MyActionCard() {
  const val = Math.random() * 100 + 1;
  return (
    <View style={tw`bg-white shadow rounded-lg flex gap-3 p-5 w-full`}>
      <Text style={tw`text-lg font-bold text-mainColor`}>
        Changed to LED bulb
      </Text>
      <View style={tw`flex flex-row justify-start items-center gap-x-2`}>
        <View
          style={tw`flex flex-row gap-x-2 py-1 items-center px-2 bg-[#f5b700] rounded-full`}
        >
          <Ionicons name={"cloud-download"} size={16} color="#ffffff" />
          <Text style={tw`text-white font-semibold`}>
            {val.toFixed(1)}kg saved
          </Text>
        </View>
        <View
          style={tw`flex flex-row gap-x-2 py-1 items-center px-4 bg-[#0d47a1] rounded-full`}
        >
          <Ionicons name={"trophy"} size={16} color="#ffffff" />
          <Text style={tw`text-white font-semibold`}>
            {Math.floor(Math.random() * 20 + 1)} points
          </Text>
        </View>
      </View>
      <Text style={tw`text-dark font-semibold`}>
        You have performed this action 5 times
      </Text>
    </View>
  );
}

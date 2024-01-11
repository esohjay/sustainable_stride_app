import React from "react";
import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "./UI/Button";

export default function TeamCard({ name, description, membersCount, showBtn }) {
  return (
    <View
      style={tw`w-full bg-white flex justify-between gap-y-5 shadow rounded-lg p-5`}
    >
      <View style={tw`bg-white`}>
        <Text style={tw`text-xl font-bold text-mainColor`}>{name}</Text>
        <Text style={tw`font-normal text-xs text-dark`}>
          {description.substring(0, 60)}...
        </Text>
      </View>
      <View style={tw`flex flex-row justify-between`}>
        <View style={tw`flex flex-row items-center gap-x-1`}>
          <Text style={tw`text-base text-dark font-semibold`}>
            {membersCount}
          </Text>
          <Ionicons name={"people"} size={24} color="#7d4f50" />
        </View>
        {showBtn && <Button text={"join"} icon={"add-circle"} />}
      </View>
    </View>
  );
}

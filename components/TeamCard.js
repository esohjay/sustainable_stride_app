import React from "react";
import { View, Text, Image } from "react-native";
import tw from "../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "./UI/Button";

export default function TeamCard({
  name,
  description,
  membersCount,
  showBtn,
  imgPath,
}) {
  return (
    <View
      style={tw`w-full bg-white flex justify-between gap-y-5 shadow rounded-lg p-5`}
    >
      <View style={tw`bg-white`}>
        <View style={tw`flex gap-x-3 flex-row items-center`}>
          <View style={tw`w-14 h-14 rounded-full bg-transparent`}>
            <Image
              style={tw`w-full h-full rounded-full max-w-full max-h-full bg-transparent`}
              resizeMode="contain"
              source={imgPath}
            />
          </View>
          <Text style={tw`text-xl font-bold text-mainColor`}>{name}</Text>
        </View>
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

import React from "react";
import { View, Text } from "react-native";
import tw from "../../lib/tailwind";
import BackButton from "../BackButton";
import { Ionicons } from "@expo/vector-icons";

function ProfileHeader() {
  return (
    <View
      style={tw`flex flex-row justify-between gap-x-3 items-center pt-4 pb-3`}
    >
      <View style={tw`flex flex-row  gap-x-2 items-center`}>
        <BackButton />
        <Text style={tw`font-extrabold text-2xl text-mainColor `}>Profile</Text>
      </View>
      <Text style={tw`text-base font-semibold text-mainColor`}>
        Edit profile
      </Text>
    </View>
  );
}

export default ProfileHeader;

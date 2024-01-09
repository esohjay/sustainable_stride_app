import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import tw from "../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";

function TrackCategoryCard({ category, value, bgUrl }) {
  return (
    <View style={tw`shadow h-40 w-[47%] rounded-xl relative`}>
      <Pressable style={tw`absolute right-3 top-3 z-10`}>
        <Ionicons name="add-circle-outline" size={24} color="#ffffff" />
      </Pressable>
      <Image
        style={tw`h-full max-h-full absolute top-0 left-0 rounded-xl flex max-w-full w-full`}
        resizeMode="cover"
        source={{
          uri: bgUrl,
        }}
      />
      <View
        style={tw`h-full w-full flex px-5 justify-end py-3 rounded-xl bg-black bg-opacity-50`}
      >
        <View style={tw`flex gap-y-4`}>
          <Text style={tw`text-primaryLight font-semibold text-base`}>
            {category}
          </Text>
          <View>
            <Text style={tw`text-lg font-semibold text-primaryLight`}>
              {value}
            </Text>
            <Text style={tw`text-primaryLight font-medium`}>
              <Text style={tw`text-base `}>kg of C0</Text>
              <Text style={tw`text-xs leading-3`}>2</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default TrackCategoryCard;

import React from "react";
import { View, Image, Text } from "react-native";
import tw from "../lib/tailwind";

export default function SdgCard({ data }) {
  return (
    <View style={tw`rounded-3xl shadow bg-white`}>
      <View style={tw`w-full rounded-t-3xl h-88 bg-transparent`}>
        <Image
          style={tw`w-full h-full rounded-t-3xl max-w-full max-h-full bg-transparent`}
          resizeMode="contain"
          source={data.imgPath}
        />
      </View>
      <Text style={tw`font-medium text-sm text-dark p-5`}>
        {data.description}
      </Text>
    </View>
  );
}

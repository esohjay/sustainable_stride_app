import React from "react";
import { View, Text, Image } from "react-native";
import tw from "../lib/tailwind";

function CampignCard({ imgUrl, text }) {
  return (
    <View style={tw`flex gap-y-1 items-center w-28`}>
      <View style={tw`border-[3px] border-secondaryAlt rounded-full`}>
        <View style={tw`h-20 bg-white p-[2px] rounded-full w-20`}>
          <Image
            style={tw`w-full h-full rounded-full max-w-full max-h-full bg-transparent`}
            resizeMode="cover"
            source={{ uri: imgUrl }}
          />
        </View>
      </View>
      <Text style={tw`font-medium text-base text-mainColor`}>{text}</Text>
    </View>
  );
}

export default CampignCard;

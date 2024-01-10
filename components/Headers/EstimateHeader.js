import React from "react";
import { View, Text } from "react-native";
import tw from "../../lib/tailwind";
import BackButton from "../BackButton";

export default function EstimateHeader({ navigation }) {
  return (
    <View style={tw`pt-4 pb-3 flex flex-row justify-between items-center `}>
      <BackButton />
      <Text style={tw`font-bold text-xl text-mainColor`}>Your footprint</Text>
      <Text></Text>
    </View>
  );
}

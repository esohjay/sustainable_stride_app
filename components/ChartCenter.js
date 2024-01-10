import React from "react";
import { View, Text } from "react-native";
import tw from "../lib/tailwind";

function ChartCenter({ value }) {
  return (
    <View style={tw`flex items-center`}>
      <Text style={tw`text-dark font-semibold text-lg`}>Overall</Text>
      <Text style={tw`text-3xl font-bold text-mainColor`}>{value}</Text>
      <Text style={tw`font-medium text-dark`}>
        <Text style={tw`text-sm`}>Tonnes of C0</Text>
        <Text style={tw`text-xs`}>2 </Text>
        <Text style={tw`text-sm`}>yearly.</Text>
      </Text>
    </View>
  );
}

export default ChartCenter;

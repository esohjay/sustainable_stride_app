import React from "react";
import tw from "../lib/tailwind";
import { View, Text } from "react-native";

export default function TextAbbrevavtion({ text, size, textSize }) {
  const splitTitle = text.trim().split(" ");
  const abbrev =
    splitTitle.length > 1
      ? `${splitTitle[0].charAt(0)}${splitTitle[1].charAt(0)}`
      : `${splitTitle[0].charAt(0)}${splitTitle[0].charAt(1)}`;
  const badgeSize = size || tw`w-14 h-14`;
  const badgeText = size || tw`text-2xl`;
  return (
    <View
      style={[
        tw`rounded-full flex justify-center items-center bg-transparent bg-dark`,
        badgeSize,
      ]}
    >
      <Text style={[tw`font-thick uppercase text-primaryLight`, badgeText]}>
        {abbrev}
      </Text>
    </View>
  );
}

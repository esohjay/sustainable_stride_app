import React from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchCampaign from "../components/SearchCampaign";
import { CustomScrollView } from "../context/providers/ScrollContext";
import tw from "../lib/tailwind";

export default function SearchCampaignScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={tw`bg-gray-50 px-5 h-full`}>
      <SearchCampaign />

      <CustomScrollView
        style={tw`bg-gray-50  `}
        screen="searchCampaign"
      ></CustomScrollView>
    </View>
  );
}

import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CampaignHeader() {
  const navigation = useNavigation();
  return (
    <View style={tw` flex flex-row justify-between items-center pt-4 pb-3`}>
      <View style={tw` flex flex-row gap-x-3 items-center`}>
        <Text style={tw`font-extrabold text-2xl text-mainColor `}>
          Campaigns
        </Text>
        <MaterialIcons name="campaign" size={28} color="#7d4f50" />
      </View>
      <Pressable onPress={() => navigation.navigate("SearchCampaign")}>
        <Octicons name="search" size={28} color="#7d4f50" />
      </Pressable>
    </View>
  );
}

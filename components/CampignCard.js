import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import tw from "../lib/tailwind";
import { useNavigation } from "@react-navigation/native";

function CampignCard({ data }) {
  const navigation = useNavigation();
  const { title, id } = data;
  const splitTitle = title.split(" ");
  const abbrev =
    splitTitle.length > 2
      ? `${splitTitle[0].charAt(0)}${splitTitle[1].charAt(0)}`
      : `${splitTitle[0].charAt(0)}${splitTitle[0].charAt(1)}`;
  return (
    <Pressable
      onPress={() => navigation.navigate("CampaignDetails", { campaignId: id })}
      style={tw`flex gap-y-1 items-center w-28`}
    >
      <View style={tw`border-[3px] border-secondaryAlt rounded-full`}>
        <View
          style={tw`w-20 h-20 rounded-full flex justify-center items-center bg-transparent bg-dark`}
        >
          <Text style={tw`text-2xl font-thick uppercase text-primaryLight`}>
            {abbrev}
          </Text>
        </View>
      </View>
      <Text style={tw`font-medium text-sm text-center text-mainColor`}>
        {title.length > 20 ? `${title.substring(0, 16)}..` : title}
      </Text>
    </Pressable>
  );
}

export default CampignCard;

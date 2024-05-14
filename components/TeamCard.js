import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import tw from "../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "./UI/Button";
import { useAuthContext } from "../context/providers/AuthProvider";
import { useNavigation } from "@react-navigation/native";

export default function TeamCard({ data, isFullWidth = true }) {
  const { state } = useAuthContext();
  const navigation = useNavigation();
  const { title, description, users, id } = data;
  const splitTitle = title.split(" ");
  const abbrev =
    splitTitle.length > 2
      ? `${splitTitle[0].charAt(0)}${splitTitle[1].charAt(0)}`
      : `${splitTitle[0].charAt(0)}${splitTitle[0].charAt(1)}`;
  return (
    <Pressable
      onPress={() => navigation.navigate("CampaignDetails", { campaignId: id })}
      style={tw`${
        isFullWidth ? "w-full" : "w-[300px]"
      } bg-white flex justify-between gap-y-5 shadow rounded-lg p-5`}
    >
      <View style={tw`bg-white`}>
        <View style={tw`flex gap-x-3 flex-row items-center`}>
          <View
            style={tw`w-14 h-14 rounded-full flex justify-center items-center bg-transparent bg-dark`}
          >
            <Text style={tw`text-2xl font-thick uppercase text-primaryLight`}>
              {abbrev}
            </Text>
          </View>
          <Text
            style={tw`text-xl font-bold text-mainColor flex flex-wrap flex-1`}
          >
            {title}
          </Text>
        </View>
        <Text style={tw`font-normal text-xs py-1 text-dark`}>
          {description.substring(0, 60)}...
        </Text>
      </View>
      <View style={tw`flex flex-row justify-between`}>
        <View style={tw`flex flex-row items-center gap-x-1`}>
          <Text style={tw`text-base text-dark font-semibold`}>
            {users.length}
          </Text>
          <Ionicons name={"people"} size={24} color="#7d4f50" />
        </View>
        {/* {!users.includes(state?.user?.id) && (
          <Button text={"join"} icon={"add-circle"} />
        )} */}
      </View>
    </Pressable>
  );
}

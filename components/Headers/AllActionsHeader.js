import React from "react";
import { View, Text } from "react-native";
import tw from "../../lib/tailwind";
import { MaterialIcons } from "@expo/vector-icons";
import BackButton from "../BackButton";

function AllActionsHeader() {
  return (
    <View style={tw` flex flex-row gap-x-3 items-baseline pt-4 pb-3`}>
      <BackButton />
      <Text style={tw`font-extrabold text-2xl text-mainColor `}>
        All actions
      </Text>
    </View>
  );
}

export default AllActionsHeader;

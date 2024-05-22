import React from "react";
import { View, FlatList, Text } from "react-native";
import ActivityCard from "./ActivityCard";
import tw from "../lib/tailwind";

export default function ActivityList({ sliderData, heading, total, category }) {
  return (
    <View style={tw`p-5 flex flex-1`}>
      <Text style={tw`font-semibold text-lg text-mainColor `}>{heading}</Text>

      <Text style={tw`font-semibold text-sm text-dark mb-5`}>
        Total of {total}
        kg <Text style={tw`text-sm `}>of C0</Text>
        <Text style={tw`text-xs leading-3`}>2e</Text>
      </Text>

      <FlatList
        // horizontal
        data={sliderData}
        ItemSeparatorComponent={() => (
          <View style={{ height: 10, width: "100%" }}></View>
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ActivityCard data={item} category={category} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

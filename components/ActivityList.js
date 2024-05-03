import React from "react";
import { View, FlatList } from "react-native";
import ActivityCard from "./ActivityCard";

export default function ActivityList({ sliderData }) {
  return (
    <FlatList
      // horizontal
      data={sliderData}
      ItemSeparatorComponent={() => <View style={{ height: 8 }}></View>}
      // showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <ActivityCard data={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

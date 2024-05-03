import React from "react";

export default function ActivityCard({ sliderData }) {
  return (
    <FlatList
      // horizontal
      data={sliderData}
      ItemSeparatorComponent={() => (
        <View style={{ height: 10, width: 8 }}></View>
      )}
      // showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <ActionCard data={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

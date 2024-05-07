import { useState } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import tw from "../lib/tailwind";
import ActionCard from "./ActionCard";
const { width } = Dimensions.get("screen");
function ActionList({ filteredActions, refresh }) {
  return (
    <View style={tw`flex  py-3`}>
      <FlatList
        data={filteredActions}
        extraData={refresh}
        ItemSeparatorComponent={() => (
          <View style={{ height: 10, width: 8 }}></View>
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <ActionCard data={item} isFullWidth={true} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ActionList;

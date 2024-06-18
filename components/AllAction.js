import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import ActionCard from "./ActionCard";
import tw from "../lib/tailwind";
import ActionCategoryBtn from "./ActionCategoryBtn";
import { useActionActions } from "../context/actions/action_actions";
import { useActionContext } from "../context/providers/ActionProvider";

export default function AllActions({
  filteredActions,
  categories,
  currentCategory,
  setCurrentCategory,
}) {
  return (
    <View style={tw`flex  flex-1`}>
      <ActionCategoryBtn
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <FlatList
        data={filteredActions}
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

import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import ActionCard from "./ActionCard";
import tw from "../lib/tailwind";
import { useActionActions } from "../context/actions/action_actions";
import { useActionContext } from "../context/providers/ActionProvider";

export default function ActionsList() {
  const { getActions } = useActionActions();
  const { state } = useActionContext();
  useEffect(() => {
    if (!state.actionList) {
      getActions();
    }
  }, [state.actionList]);

  return (
    <View style={tw`flex items-center`}>
      <FlatList
        horizontal
        data={state?.actionList?.slice(
          state?.actionList?.length - 4,
          state?.actionList?.length - 1
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 10, width: 8 }}></View>
        )}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActionCard data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

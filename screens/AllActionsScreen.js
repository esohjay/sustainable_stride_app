import React, { useMemo, useRef, useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import tw from "../lib/tailwind";
import ActionCard from "../components/ActionCard";
import SearchAction from "./SearchActionsScreen";
import { Ionicons } from "@expo/vector-icons";
import ActionsList from "../components/ActionsList";
import { Button } from "../components/UI/Button";
import { useActionActions } from "../context/actions/action_actions";
import { useActionContext } from "../context/providers/ActionProvider";
import AllActions from "../components/AllAction";
import { Badge } from "../components/Badge";

const categories = ["energy", "shopping", "food", "travel"];
export default function AllActionsScreen({ navigation }) {
  const { getActions } = useActionActions();
  const { state } = useActionContext();
  const snapPoints = useMemo(() => ["90%"], []);
  const bottomSheetRef = useRef(null);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [actionsCategories, setActionsCategories] = useState({
    food: null,
    energy: null,
    travel: null,
    shopping: null,
  });
  function handlePresentModal() {
    bottomSheetRef.current?.present();
  }
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate("SearchAction")}>
          <Ionicons name={"search"} size={24} color="#7d4f50" />
        </Pressable>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (!state.actionList) {
      getActions();
    }
  }, [state.actionList]);
  useEffect(() => {
    if (state.actionList) {
      const actionData = {};
      for (const category of categories) {
        const filtered = state.actionList.filter(
          (action) => action.category === category
        );
        actionData[category] = filtered;
      }
      setActionsCategories(actionData);
    }
  }, [state.actionList]);

  return (
    <View style={tw`flex bg-gray-50  p-5 flex-1`}>
      <AllActions
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        filteredActions={actionsCategories[currentCategory]}
      />

      <BottomSheetModal
        ref={bottomSheetRef}
        // index={1}
        snapPoints={snapPoints}
        backgroundStyle={{ borderRadius: 25 }}
        style={tw`shadow-lg bg-white rounded-3xl`}
      >
        <View style={tw`px-5`}>
          <SearchAction />
        </View>
      </BottomSheetModal>
    </View>
  );
}

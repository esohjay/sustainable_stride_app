import React, { useMemo, useRef, useEffect } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import tw from "../lib/tailwind";
import ActionCard from "../components/ActionCard";
import SearchAction from "../components/SearchActions";
import { Ionicons } from "@expo/vector-icons";

export default function AllActionsScreen({ navigation }) {
  const snapPoints = useMemo(() => ["90%"], []);
  const bottomSheetRef = useRef(null);

  function handlePresentModal() {
    bottomSheetRef.current?.present();
  }
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={handlePresentModal}>
          <Ionicons name={"search"} size={24} color="#7d4f50" />
        </Pressable>
      ),
    });
  }, [navigation]);
  const sliderData = [
    {
      description:
        "Calculate your houdehold carbon emission by answering few questions.",
      title: "Change to LED buld",
      category: "Electricity",
      sdg: "SDG 6",
      id: "2",
    },
    {
      description:
        "A splash screen, also known as a launch screen, is the first screen a user sees when they open your app.",
      title: "Switch to reusable razor",
      category: "Electricity",
      sdg: "SDG 4",
      id: "3",
    },
    {
      description:
        "Scrolls to the item at the specified index such that it is positioned in the viewable area",
      title: "Recycle waste",
      category: "Household",
      sdg: "SDG 10",
      id: "4",
    },
    {
      description:
        "Start or join campaigns that reduces carbon emissions in your area.",
      title: "Take bus",
      category: "Transport",
      sdg: "SDG 8",
      id: "1",
    },
  ];
  return (
    <View style={tw`flex bg-gray-50  items-center gap-y-3 p-5`}>
      <FlatList
        data={sliderData}
        ItemSeparatorComponent={() => (
          <View style={{ height: 16, width: 8 }}></View>
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ActionCard data={item} isFullWidth={true} />}
        keyExtractor={(item) => item.id}
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

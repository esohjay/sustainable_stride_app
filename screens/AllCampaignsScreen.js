import React, { useMemo, useRef, useEffect, useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import tw from "../lib/tailwind";
import SearchCampaign from "./SearchCampaignScreen";
import { Ionicons } from "@expo/vector-icons";
import TeamCard from "../components/TeamCard";
import { useCampaignActions } from "../context/actions/campaign_actions";
import { useCampaignContext } from "../context/providers/CampaignProvider";

export default function AllCampaignsScreen({ navigation }) {
  const { getCampaigns } = useCampaignActions();
  const { state } = useCampaignContext();
  const snapPoints = useMemo(() => ["90%"], []);
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate("SearchCampaign")}>
          <Ionicons name={"search"} size={24} color="#7d4f50" />
        </Pressable>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (!state.campaignList) {
      getCampaigns();
    }
  }, [state.campaignList]);

  return (
    <View style={tw`flex bg-gray-50  p-5 flex-1`}>
      <FlatList
        data={state?.campaignList}
        ItemSeparatorComponent={() => (
          <View style={{ height: 10, width: 8 }}></View>
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <TeamCard data={item} />;
        }}
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
          <SearchCampaign />
        </View>
      </BottomSheetModal>
    </View>
  );
}

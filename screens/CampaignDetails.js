import React, { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import tw from "../lib/tailwind";
import BackButton from "../components/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../components/UI/Button";
import {
  JOIN_CAMPAIGN_RESET,
  LEAVE_CAMPAIGN_RESET,
} from "../context/constants/campaign_constant";
import { useNavigation } from "@react-navigation/native";
import { useCampaignActions } from "../context/actions/campaign_actions";
import { useCampaignContext } from "../context/providers/CampaignProvider";
import { useAuthContext } from "../context/providers/AuthProvider";

export default function CampaignDetails({ route, navigation }) {
  const { state: userState } = useAuthContext();
  const navigate = useNavigation();
  const insets = useSafeAreaInsets();
  const { campaignId } = route.params;
  //   const [campaign, setCampaign] = useState(null);
  const { joinCampaign, leaveCampaign, getCampaign } = useCampaignActions();
  const { state, dispatch } = useCampaignContext();
  const { campaign, left, joined, fetchingCampaign } = state;
  useEffect(() => {
    getCampaign(campaignId);
    // if (!campaign) {
    //   getCampaign(campaignId);
    // }
  }, []);
  useEffect(() => {
    if (left) {
      const timeoutId = setTimeout(() => {
        dispatch({ type: LEAVE_CAMPAIGN_RESET });
        getCampaign(campaignId);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [left]);
  useEffect(() => {
    if (joined) {
      const timeoutId = setTimeout(() => {
        dispatch({ type: JOIN_CAMPAIGN_RESET });
        getCampaign(campaignId);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [joined]);

  return (
    <ScrollView style={tw`bg-gray-50  min-h-screen`}>
      <View
        style={tw`relative pt-[${insets.top}] pb-[${insets.bottom}] px-5 bg-white rounded-b-3xl shadow-md`}
      >
        <BackButton />
        <View style={tw`w-full absolute left-5  -bottom-7 flex items-center`}>
          <View
            style={tw`flex h-12 w-1/2 p-1 justify-center shadow-md shadow-white items-center bg-emerald-500 rounded-full`}
          >
            <View
              style={tw`flex flex-row gap-x-1  w-full h-full items-center justify-center rounded-full`}
            >
              <Ionicons name={"people"} size={16} color="#ffffff" />
              <Text style={tw`text-white font-semibold`}>
                {campaign?.users?.length}
              </Text>
              <Text style={tw`text-white font-semibold`}>
                {campaign?.users?.length > 1 ? "Members" : "Member"}
              </Text>
            </View>
          </View>
        </View>
        <View style={tw`py-5 flex gap-5 items-center`}>
          <Text
            style={tw`font-thick capitalize text-mainColor text-center text-lg`}
          >
            {campaign?.title}
          </Text>
          <Text style={tw`font-medium text-justify text-dark text-sm mb-2`}>
            {campaign?.description}
          </Text>
        </View>
      </View>
      <View style={tw`px-5 mt-16`}>
        {joined && (
          <Text style={tw`my-2 text-sm text-green-500`}>
            You have joined this campaign!
          </Text>
        )}
        {left && (
          <Text style={tw`my-2 text-sm text-green-500`}>
            You left this campaign
          </Text>
        )}
        <View style={tw` bg-mainColor p-4 shadow-md rounded-lg`}>
          <Text style={tw`font-semibold mb-2 text-primaryLight`}>
            {campaign?.users?.includes(userState?.user?.id)
              ? "You are a member of this campaign"
              : "Join this campaign to make changes to our world"}
          </Text>
          <View style={tw`w-full flex flex-row justify-start pt-4`}>
            <View style={tw`max-w-2/3`}>
              {campaign?.users?.includes(userState?.user?.id) ? (
                <Button
                  style={tw`text-[9px] px-4`}
                  height="38"
                  text={"leave campaign"}
                  icon={"person-remove"}
                  isLoading={state.leaving}
                  onPress={() => leaveCampaign(campaignId)}
                  variant="light"
                />
              ) : (
                <Button
                  style={tw`text-[9px] px-4`}
                  height="38"
                  text={"join campaign"}
                  icon={"person-add"}
                  isLoading={state.joining}
                  onPress={() => joinCampaign(campaignId)}
                  variant="light"
                />
              )}
            </View>
          </View>
        </View>
        {campaign?.users?.includes(userState?.user?.id) && (
          <View style={tw`w-full flex flex-row justify-end pt-4`}>
            <View style={tw`max-w-2/3`}>
              <Button
                style={tw`text-[9px] px-4`}
                height="38"
                text={"go to chat"}
                icon={"chatbubbles"}
                // isLoading={state.leaving}
                onPress={() =>
                  navigation.navigate("Chat", {
                    title: campaign?.title,
                    campaignId,
                  })
                }
                variant="light"
              />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

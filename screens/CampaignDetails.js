import React, { useEffect, useRef, useMemo } from "react";
import { ScrollView, View, Text, Alert } from "react-native";
import tw from "../lib/tailwind";
import BackButton from "../components/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../components/UI/Button";
import {
  JOIN_CAMPAIGN_RESET,
  LEAVE_CAMPAIGN_RESET,
  GET_CAMPAIGN_DETAILS_REQUEST,
  GET_CAMPAIGN_DETAILS_SUCCESS,
  DELETE_CAMPAIGN_RESET,
} from "../context/constants/campaign_constant";
import { useCampaignActions } from "../context/actions/campaign_actions";
import { useCampaignContext } from "../context/providers/CampaignProvider";
import { useAuthContext } from "../context/providers/AuthProvider";
import CampaignDetailsSkeleton from "../components/skeletons/CampaignDetailsSkeleton";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import EditCampaignForm from "../components/EditCampaignForm";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";

export default function CampaignDetails({ route, navigation }) {
  const { state: userState } = useAuthContext();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["65%"], []);
  function handleShowForm() {
    bottomSheetRef.current?.present();
  }
  function handleCloseForm() {
    bottomSheetRef.current?.close();
  }
  const insets = useSafeAreaInsets();
  const { campaignId } = route.params;
  //   const [campaign, setCampaign] = useState(null);
  const { joinCampaign, leaveCampaign, deleteCampaign } = useCampaignActions();
  const { state, dispatch } = useCampaignContext();
  const { campaign, left, joined, fetchingCampaign, deleted } = state;
  const createAlert = () =>
    Alert.alert(
      "Delete campaign?",
      "This campaign will be deleted permanently.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Delete", onPress: () => deleteCampaign(campaignId) },
      ]
    );

  useEffect(() => {
    dispatch({ type: GET_CAMPAIGN_DETAILS_REQUEST });
    const q = doc(db, "campaign", campaignId);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      dispatch({
        type: GET_CAMPAIGN_DETAILS_SUCCESS,
        payload: querySnapshot.data(),
      });
    });
    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   getCampaign(campaignId);
  //   // if (!campaign) {
  //   //   getCampaign(campaignId);
  //   // }
  // }, []);
  useEffect(() => {
    if (left) {
      const timeoutId = setTimeout(() => {
        dispatch({ type: LEAVE_CAMPAIGN_RESET });
        // getCampaign(campaignId);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [left]);
  useEffect(() => {
    if (joined) {
      const timeoutId = setTimeout(() => {
        dispatch({ type: JOIN_CAMPAIGN_RESET });
        // getCampaign(campaignId);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [joined]);
  useEffect(() => {
    if (deleted) {
      dispatch({ type: DELETE_CAMPAIGN_RESET });
      navigation.goBack();
    }
  }, [deleted]);

  return (
    <ScrollView style={tw`bg-gray-50  min-h-screen`}>
      {!fetchingCampaign ? (
        <View>
          <View
            style={tw`relative pt-[${insets.top}] pb-[${insets.bottom}] px-5 bg-white rounded-b-3xl shadow-md`}
          >
            <BackButton />
            <View
              style={tw`w-full absolute left-5  -bottom-7 flex items-center`}
            >
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
            {campaign?.createdBy === userState?.user?.id && (
              <View style={tw`flex flex-row my-3 gap-x-4`}>
                <Button
                  style={tw`text-[9px] px-4`}
                  height="38"
                  text={"edit"}
                  icon={"create"}
                  // isLoading={state.leaving}
                  onPress={handleShowForm}
                />
                <Button
                  style={tw`text-[9px] px-4`}
                  height="38"
                  text={"delete"}
                  icon={"trash"}
                  isLoading={state.deleting}
                  onPress={createAlert}
                  variant="destructive"
                />
              </View>
            )}
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
        </View>
      ) : (
        <View
          style={tw`pt-[${insets.top}] pb-[${insets.bottom}] px-5 flex gap-4`}
        >
          <BackButton />
          <CampaignDetailsSkeleton />
        </View>
      )}
      <BottomSheetModal
        ref={bottomSheetRef}
        // index={1}

        snapPoints={snapPoints}
        backgroundStyle={{ borderRadius: 25 }}
        style={tw`shadow-lg bg-white rounded-3xl`}
      >
        <View style={tw`px-5`}>
          <EditCampaignForm closeForm={handleCloseForm} />
        </View>
      </BottomSheetModal>
    </ScrollView>
  );
}

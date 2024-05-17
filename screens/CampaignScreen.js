import { useRef, useMemo, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import tw from "../lib/tailwind";
import { CustomScrollView } from "../context/providers/ScrollContext";
import { Button } from "../components/UI/Button";
import TeamCard from "../components/TeamCard";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CampaignForm from "../components/CampaignForm";
import { useCampaignActions } from "../context/actions/campaign_actions";
import { useCampaignContext } from "../context/providers/CampaignProvider";
import CampaignCardSkeleton from "../components/skeletons/CampaignCardSkeleton";

function CampaignScreen({ navigation }) {
  const { getCampaigns, getJoinedCampaigns } = useCampaignActions();
  const { state } = useCampaignContext();
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["65%"], []);
  function handlePresentNameModal() {
    bottomSheetRef.current?.present();
  }
  useEffect(() => {
    if (!state.campaignList) {
      getCampaigns();
    }
  }, [state.campaignList]);
  useEffect(() => {
    if (!state.joinedCampaignList) {
      getJoinedCampaigns();
    }
  }, [state.joinedCampaignList]);
  return (
    <CustomScrollView style={tw`bg-gray-50  `} screen="campaign">
      <View style={tw`p-5`}>
        <Text style={tw`font-normal text-sm mb-2`}>
          Join and explore campaigns to improve your positive impact!
        </Text>
        <View style={tw`flex flex-row items-start`}>
          <Button
            text={"Start a Campaign"}
            icon={"add-circle"}
            onPress={handlePresentNameModal}
          />
        </View>
        <View style={tw`py-5`}>
          <Text style={tw`text-xl text-mainColor font-bold mb-3`}>
            Your teams
          </Text>
          {state?.joinedCampaignList?.length ? (
            <View style={tw`flex gap-y-3 `}>
              {/* Change to flatlist */}
              {state?.joinedCampaignList?.map((campaign) => (
                <TeamCard key={campaign.id} data={campaign} />
              ))}
            </View>
          ) : (
            <CampaignCardSkeleton />
          )}
        </View>
        <View style={tw`py-5`}>
          <View
            style={tw`flex flex-row justify-between w-full items-center py-2`}
          >
            <Text style={tw`text-xl text-mainColor font-bold mb-3`}>
              Campaigns
            </Text>
            <Text
              style={[tw`text-secondaryAlt text-base font-normal`]}
              onPress={() => navigation.navigate("AllCampaigns")}
            >
              See all
            </Text>
          </View>
          <View style={tw`flex gap-y-3`}>
            {state?.campaignList?.length ? (
              <FlatList
                data={state?.campaignList}
                // extraData={refresh}
                horizontal
                ItemSeparatorComponent={() => (
                  <View style={{ height: 10, width: 8 }}></View>
                )}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                  return <TeamCard data={item} isFullWidth={false} />;
                }}
                keyExtractor={(item) => item.id}
              />
            ) : (
              <CampaignCardSkeleton />
            )}
          </View>
        </View>
        <BottomSheetModal
          ref={bottomSheetRef}
          // index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 25 }}
          style={tw`shadow-lg bg-white rounded-3xl`}
        >
          <View style={tw`px-5`}>
            <CampaignForm />
          </View>
        </BottomSheetModal>
      </View>
    </CustomScrollView>
  );
}

export default CampaignScreen;

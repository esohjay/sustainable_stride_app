import { useEffect } from "react";
import { View, ScrollView } from "react-native";
import tw from "../lib/tailwind";
import CampignCard from "./CampignCard";
import { useCampaignActions } from "../context/actions/campaign_actions";
import { useCampaignContext } from "../context/providers/CampaignProvider";
import CampaignRoundSkeleton from "./skeletons/CampaignRound";
function CampaignList() {
  const { getCampaigns } = useCampaignActions();
  const { state } = useCampaignContext();
  useEffect(() => {
    if (!state.campaignList) {
      getCampaigns();
    }
  }, [state.campaignList]);

  return (
    <>
      {state.campaignList ? (
        <ScrollView
          // onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={900}
          // pagingEnabled
          horizontal
          style={tw` flex flex-row gap-x-5 mb-2`}
        >
          <View style={tw`flex flex-row gap-x-3`}>
            {[
              state?.campaignList?.map((data, i) => {
                if (i < 5) return <CampignCard data={data} key={data.id} />;
              }),
            ]}
          </View>
        </ScrollView>
      ) : (
        <CampaignRoundSkeleton loadingState={state?.fetchingCampaign} />
      )}
    </>
  );
}

export default CampaignList;

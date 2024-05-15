import { useEffect } from "react";
import { View, ScrollView } from "react-native";
import tw from "../lib/tailwind";
import CampignCard from "./CampignCard";
import { useCampaignActions } from "../context/actions/campaign_actions";
import { useCampaignContext } from "../context/providers/CampaignProvider";

function CampaignList() {
  const { getCampaigns } = useCampaignActions();
  const { state } = useCampaignContext();
  useEffect(() => {
    if (!state.campaignList) {
      getCampaigns();
    }
  }, [state.campaignList]);
  const sliderData = [
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2023/07/17/13/22/carbon-8132649_1280.jpg",
      text: "Edible green",
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2021/05/14/12/26/pollution-6253264_1280.jpg",
      text: "Enviroteam",
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2022/04/19/16/41/renewable-energy-7143345_1280.jpg",
      text: "Carbon log",
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2022/04/10/14/43/carbon-dioxide-7123532_1280.jpg",
      text: "EnviroHero",
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2023/07/17/13/22/carbon-8132649_1280.jpg",
      text: "Edible green",
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2021/05/14/12/26/pollution-6253264_1280.jpg",
      text: "Enviroteam",
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2022/04/19/16/41/renewable-energy-7143345_1280.jpg",
      text: "Carbon log",
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2022/04/10/14/43/carbon-dioxide-7123532_1280.jpg",
      text: "EnviroHero",
    },
  ];

  return (
    <>
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
    </>
  );
}

export default CampaignList;

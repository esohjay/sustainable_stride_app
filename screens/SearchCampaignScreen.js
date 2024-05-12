import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, FlatList } from "react-native";
import tw from "../lib/tailwind";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../components/UI/Button";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import TeamCard from "../components/TeamCard";
import { useCampaignActions } from "../context/actions/campaign_actions";
import { useCampaignContext } from "../context/providers/CampaignProvider";
import ActionList from "../components/ActionList";
import BackButton from "../components/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TextInput } from "../components/UI/TextInput";

export default function SearchCampaign() {
  const insets = useSafeAreaInsets();
  const { getCampaigns } = useCampaignActions();
  const { state } = useCampaignContext();
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      action: "",
    },
  });

  const findCampaign = (query) => {
    if (!query) return setFilteredCampaigns([]);

    const result = state?.campaignList?.filter((campaign) => {
      return campaign.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredCampaigns(result);
    setRefresh(!refresh);
  };

  //delay finding of schools as user type
  const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };
  const optimizedFn = useCallback(debounce(findCampaign), []);

  useEffect(() => {
    if (!state.campaignList) {
      getCampaigns();
    }
  }, [state.campaignList]);
  return (
    <View
      style={tw`relative pt-[${insets.top}] flex flex-1 pb-[${insets.bottom}] px-5 bg-white rounded-b-3xl shadow-md`}
    >
      <BackButton />
      <View style={tw`h-full  py-2`}>
        <Text style={tw`font-semibold text-base mb-2 text-mainColor`}>
          Search campaigns
        </Text>
        <View>
          <TextInput
            onChangeText={(e) => optimizedFn(e)}
            // value={value}
            autoFocus={true}
            style={tw`p-3 border rounded-lg mb-3`}
            placeholder="Enter atleast 3 letters"
          />
        </View>

        <View style={tw`flex flex-1  py-3`}>
          <FlatList
            data={filteredCampaigns}
            extraData={filteredCampaigns?.length}
            ItemSeparatorComponent={() => (
              <View style={{ height: 10, width: 8 }}></View>
            )}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return <TeamCard data={item} />;
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}

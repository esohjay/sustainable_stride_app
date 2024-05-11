import React, { useEffect } from "react";
import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import { useForm, Controller } from "react-hook-form";
import { Button } from "./UI/Button";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { useCampaignActions } from "../context/actions/campaign_actions";
import { useCampaignContext } from "../context/providers/CampaignProvider";
import { CREATE_CAMPAIGN_RESET } from "../context/constants/campaign_constant";

export default function CampaignForm() {
  const { createCampaign, getCampaigns } = useCampaignActions();
  const { state, dispatch } = useCampaignContext();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    createCampaign(data);
  };
  useEffect(() => {
    if (state.campaignAdded) {
      getCampaigns();
      const timeoutId = setTimeout(() => {
        dispatch({ type: CREATE_CAMPAIGN_RESET });
        reset();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [state.campaignAdded]);
  return (
    <View style={tw``}>
      <Text style={tw`font-semibold text-base mb-2 text-mainColor`}>
        Start a campaign
      </Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text style={tw`font-semibold text-base mb-2 text-mainColor`}>
                Title
              </Text>
              <BottomSheetTextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={tw`p-3 border rounded-lg mb-3`}
                placeholder="Enter campaign title"
              />
            </View>
          )}
          name="title"
        />
        {errors.fullName && (
          <Text style={tw`mt-1 text-sm text-red-500`}>Title is required</Text>
        )}
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text style={tw`font-semibold text-base mb-2 text-mainColor`}>
                Description
              </Text>
              <BottomSheetTextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={tw`p-3 border rounded-lg mb-3`}
                placeholder="Enter campaign description"
                multiline={true}
                numberOfLines={5}
              />
            </View>
          )}
          name="description"
        />
        {errors.fullName && (
          <Text style={tw`mt-1 text-sm text-red-500`}>Title is required</Text>
        )}
      </View>

      <Button
        text={"Create campaign"}
        textStyle={tw`px-10 py-4`}
        isLoading={state.addingCampaign}
        onPress={handleSubmit(onSubmit)}
      />
      {state.campaignAdded && (
        <Text style={tw`mt-1 text-sm text-green-500`}>Campaign added!</Text>
      )}
    </View>
  );
}

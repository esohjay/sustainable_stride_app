import React, { useEffect } from "react";
import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import { useForm, Controller } from "react-hook-form";
import { Button } from "./UI/Button";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { useCampaignActions } from "../context/actions/campaign_actions";
import { useCampaignContext } from "../context/providers/CampaignProvider";
import { UPDATE_CAMPAIGN_RESET } from "../context/constants/campaign_constant";

export default function EditCampaignForm({ closeForm }) {
  const { updateCampaign } = useCampaignActions();
  const { state, dispatch } = useCampaignContext();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: state?.campaign?.title || "",
      description: state?.campaign?.description || "",
    },
  });
  console.log(state?.campaign);
  const onSubmit = (data) => {
    updateCampaign({ ...data, id: state?.campaign?.id });
  };
  useEffect(() => {
    if (state.updated) {
      //   getCampaigns();
      const timeoutId = setTimeout(() => {
        closeForm();
        dispatch({ type: UPDATE_CAMPAIGN_RESET });
        reset();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [state.updated]);
  return (
    <View style={tw``}>
      <Text style={tw`font-semibold text-base mb-2 text-mainColor`}>
        Edit campaign
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
        {errors.title && (
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
                // numberOfLines={5}
              />
            </View>
          )}
          name="description"
        />
        {errors.description && (
          <Text style={tw`mt-1 text-sm text-red-500`}>Title is required</Text>
        )}
      </View>

      <Button
        text={"Update campaign"}
        textStyle={tw`px-10 py-4`}
        isLoading={state.updating}
        onPress={handleSubmit(onSubmit)}
      />
      {state.updated && (
        <Text style={tw`mt-1 text-sm text-green-500`}>Campaign updated!</Text>
      )}
    </View>
  );
}

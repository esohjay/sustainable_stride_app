import React, { useEffect } from "react";
import { DropdownSelect } from "./Dropdown";
import { View, Text } from "react-native";
import { TextInput } from "./UI/TextInput";
import tw from "../lib/tailwind";
import { Button } from "./UI/Button";
import { useForm, Controller } from "react-hook-form";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { useTrackActions } from "../context/actions/track_actions";
import { useTrackContext } from "../context/providers/TrackProvider";
import { RESET_ACTIVITY } from "../context/constants/track_constants";

export default function TrackForm({ options, category, heading }) {
  const { addActivity } = useTrackActions();
  const { state, dispatch } = useTrackContext();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      activity: "",
      amount: "",
    },
  });
  useEffect(() => {
    if (state.activityAdded) {
      const timeoutId = setTimeout(() => {
        dispatch({ type: RESET_ACTIVITY });
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [state.activityAdded]);
  console.log(state?.activity);

  const onSubmit = (data) => {
    addActivity({ ...data, category });
    reset();
  };
  return (
    <View style={tw`flex gap-2 p-5`}>
      <Text style={tw`font-semibold text-base text-dark mb-2`}>{heading}</Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <DropdownSelect
              options={[...options]}
              onSelect={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Select activity"
            />
          )}
          name="activity"
        />
        {errors.amount && (
          <Text style={tw`mt-1 text-sm text-red-500`}>Amount is required</Text>
        )}
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              border={true}
              value={value}
              icon="logo-euro"
              keyboardType="number-pad"
              placeholder="0"
              label={"Amount spent"}
            />
          )}
          name="amount"
        />
        {errors.amount && (
          <Text style={tw`mt-1 text-sm text-red-500`}>Amount is required</Text>
        )}
        {state.activityAdded && (
          <Text style={tw`mt-1 text-sm text-green-500`}>Activity added!</Text>
        )}
      </View>
      <View style={tw`w-full flex flex-row justify-end py-4`}>
        <View style={tw` max-w-2/3`}>
          <Button
            onPress={handleSubmit(onSubmit)}
            style={tw`text-[9px] px-8`}
            height="38"
            text={"Add acttivity"}
            icon={"add-circle-outline"}
            isLoading={state.addingActivity}
          />
        </View>
      </View>
    </View>
  );
}

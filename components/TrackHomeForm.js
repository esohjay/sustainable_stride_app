import React, { useState } from "react";
import { DropdownSelect } from "./Dropdown";
import { View } from "react-native";
import { TextInput } from "./UI/TextInput";
import tw from "../lib/tailwind";
import { Button } from "./UI/Button";
import { useForm, Controller } from "react-hook-form";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { useTrackActions } from "../context/actions/track_actions";
import { useSurveyActions } from "../context/actions/survey_actions";

export default function TrackHomeForm({ addActivity }) {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      activity: "",
      amount: "",
    },
  });
  const onSubmit = (data) => {
    addActivity({ ...data, category: "home" });
  };
  return (
    <View style={tw`flex gap-2 p-5`}>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <DropdownSelect
              options={[
                { label: "Water supply", value: "waterSupply" },
                { label: "Refuse collection", value: "refuseCollection" },
                { label: "Electricity", value: "electricity" },
                { label: "Gas", value: "gas" },
                { label: "Furniture", value: "furniture" },
                { label: "Household appliances", value: "householdAppliances" },
                { label: "Household textiles", value: "householdTextiles" },
                {
                  label: "Utensils, Glass & Tablewares",
                  value: "householdUtensils",
                },
              ]}
              onSelect={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Select"
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
              icon="mail"
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
      </View>
      <View style={tw`w-full flex flex-row justify-end py-4`}>
        <View style={tw` w-1/2`}>
          <Button
            onPress={handleSubmit(onSubmit)}
            style={tw`text-[9px]`}
            height="33"
            text={"Add acttivity"}
            icon={"add-circle-outline"}
          />
        </View>
      </View>
    </View>
  );
}

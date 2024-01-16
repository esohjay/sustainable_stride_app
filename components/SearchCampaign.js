import React from "react";
import { View, Text } from "react-native";
import AviodKeyBoardViewWrapper from "../components/AviodKeyBoardViewWrapper";
import { useForm, Controller } from "react-hook-form";
import { TextInput } from "../components/UI/TextInput";
import tw from "../lib/tailwind";

export default function SearchCampaign() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      campaign: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    // <AviodKeyBoardViewWrapper>
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
            value={value}
            autoFocus={true}
            icon="search-circle-outline"
            placeholder="at least 3 letters"
            // label={"Email"}
          />
        )}
        name="campaign"
      />
      {errors.campaign && (
        <Text style={tw`mt-1 text-sm text-red-500`}>campaign is required</Text>
      )}
    </View>
    // </AviodKeyBoardViewWrapper>
  );
}

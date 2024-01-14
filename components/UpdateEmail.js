import React from "react";
import { View, Image, Text } from "react-native";
import tw from "../lib/tailwind";
import { useForm, Controller } from "react-hook-form";
import { Button } from "./UI/Button";
import { BottomSheetModal, BottomSheetTextInput } from "@gorhom/bottom-sheet";

export default function UpdateEmail() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      confirmEmail: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <View style={tw`pb-5 border-b border-b-gray-400`}>
      <Text style={tw`font-semibold text-base mb-2 text-mainColor`}>
        Change email
      </Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <BottomSheetTextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              style={tw`p-3 border rounded-lg mb-3`}
              placeholder="New email address"
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={tw`mt-1 text-sm text-red-500`}>Email is required</Text>
        )}
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <BottomSheetTextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              style={tw`p-3 border rounded-lg mb-3`}
              placeholder="Re-type new email address"
            />
          )}
          name="confirmEmail"
        />
        {errors.email && (
          <Text style={tw`mt-1 text-sm text-red-500`}>Email is required</Text>
        )}
      </View>
      <Button
        text={"Save"}
        textStyle={tw`px-10 py-4`}
        //   isLoading={state.loading}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

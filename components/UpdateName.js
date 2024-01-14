import React from "react";
import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import { useForm, Controller } from "react-hook-form";
import { Button } from "./UI/Button";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

export default function UpdateName() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "Olusoji Daramola",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <View style={tw``}>
      <Text style={tw`font-semibold text-base mb-2 text-mainColor`}>
        Change name
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
              style={tw`p-3 border rounded-lg mb-3`}
              placeholder="Enter full name"
            />
          )}
          name="fullName"
        />
        {errors.fullName && (
          <Text style={tw`mt-1 text-sm text-red-500`}>Name is required</Text>
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

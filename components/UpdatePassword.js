import React from "react";
import { View, Image, Text } from "react-native";
import tw from "../lib/tailwind";
import { useForm, Controller } from "react-hook-form";
import { Button } from "./UI/Button";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

export default function UpdatePassword() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <View style={tw`py-3`}>
      <Text style={tw`font-semibold text-base mb-2 text-mainColor`}>
        Change password
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
              placeholder="Old password"
              secureTextEntry={true}
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={tw`mt-1 text-sm text-red-500`}>
            Password is required
          </Text>
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
              secureTextEntry={true}
              style={tw`p-3 border rounded-lg mb-3`}
              placeholder="New password"
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && (
          <Text style={tw`mt-1 text-sm text-red-500`}>
            Password is required
          </Text>
        )}
      </View>
      <Button
        text={"Update"}
        textStyle={tw`px-10 py-4`}
        //   isLoading={state.loading}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

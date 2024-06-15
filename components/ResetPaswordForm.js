import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import { useForm, Controller } from "react-hook-form";
import { Button } from "./UI/Button";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { useAuthActions } from "../context/actions/auth_actions";
import { useAuthContext } from "../context/providers/AuthProvider";
import { RESET_PASSWORD_RESET } from "../context/constants/auth_constants";
import { formatError } from "../lib/firebaseError";

export default function ResetPassword({ closeForm }) {
  const { resetPassword } = useAuthActions();
  const { state, dispatch } = useAuthContext();
  const [errorMsg, setErrorMsg] = useState("");
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    resetPassword(data.email);
  };
  useEffect(() => {
    if (state?.error) {
      const formattedError = formatError(state?.error);
      setErrorMsg(formattedError);
    }
  }, [state?.error]);
  useEffect(() => {
    if (state.resetSent) {
      const timeoutId = setTimeout(() => {
        closeForm();
        dispatch({ type: RESET_PASSWORD_RESET });
        reset();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [state.resetSent]);
  return (
    <View style={tw``}>
      <Text style={tw`font-semibold text-base mb-2 text-mainColor`}>
        Reset your password
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
                Email address
              </Text>
              <BottomSheetTextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={tw`p-3 border rounded-lg mb-3`}
                placeholder="Enter email address"
                keyboardType="email-address"
              />
            </View>
          )}
          name="email"
        />
        {errors.email && (
          <Text style={tw`mt-1 text-sm text-red-500`}>Email is required</Text>
        )}
      </View>
      <Button
        text={"Reset"}
        textStyle={tw`px-10 py-4`}
        isLoading={state.loading}
        onPress={handleSubmit(onSubmit)}
      />
      {state.resetSent && (
        <Text style={tw`mt-1 text-sm text-green-500`}>
          Success! If your email address registered with us, you will receive a
          reset link.
        </Text>
      )}
      {state?.error && (
        <Text style={tw`mt-1 text-sm text-red-500`}>{errorMsg}</Text>
      )}
    </View>
  );
}

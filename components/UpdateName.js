import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import { useForm, Controller } from "react-hook-form";
import { Button } from "./UI/Button";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { useAuthContext } from "../context/providers/AuthProvider";
import { useAuthActions } from "../context/actions/auth_actions";
import { UPDATE_PROFILE_RESET } from "../context/constants/auth_constants";
import { reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { auth } from "../lib/firebaseConfig";
import { SIGN_IN_FAIL } from "../context/constants/auth_constants";

export default function UpdateName() {
  const { updateProfile } = useAuthActions();
  const user = auth.currentUser;
  const { state, dispatch } = useAuthContext();
  const { updated, updating, profile, error } = state;
  const [showPassord, setShowPassword] = useState(false);
  const [reAuth, setReauth] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: profile?.fullName,
      email: profile?.email,
      password: "",
    },
  });
  const onSubmit = (data) => {
    if (profile?.email !== data.email && data.password === "") {
      setError("password", { type: "required" });
      setShowPassword(true);
      return;
    } else if (profile?.email !== data.email && data.password !== "") {
      //re-authenticate with old password and update
      const credential = EmailAuthProvider.credential(
        profile.email,
        data.password
      );
      reauthenticateWithCredential(user, credential)
        .then(() => {
          updateProfile(data);
          setReauth(true);
        })
        .catch((error) => {
          // An error ocurred
          dispatch({ type: SIGN_IN_FAIL, payload: error });
          return;
          // ...
        });
    } else {
      updateProfile(data);
    }
  };

  useEffect(() => {
    if (updated) {
      const timeoutId = setTimeout(() => {
        dispatch({ type: UPDATE_PROFILE_RESET });
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [updated]);

  useEffect(() => {
    if (updated && reAuth) {
      const credential = EmailAuthProvider.credential(
        getValues("email"),
        getValues("password")
      );
      reauthenticateWithCredential(user, credential)
        .then(() => {
          setReauth(false);
        })
        .catch((error) => {
          // An error ocurred
          dispatch({ type: SIGN_IN_FAIL, payload: error });
          // ...
        });
    }
  }, [updated]);
  return (
    <View style={tw``}>
      <Text style={tw`font-semibold text-base mb-2 text-mainColor`}>
        Update profile
      </Text>
      <View>
        <Text style={tw`py-2 font-semibold text-sm text-mainColor`}>
          Fullname
        </Text>
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
      <View>
        <Text style={tw`py-2 font-semibold text-sm text-mainColor`}>
          Email address
        </Text>
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
              readOnly={updated}
              keyboardType="email-address"
              style={tw`p-3 border rounded-lg mb-3`}
              placeholder="email address"
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={tw`mt-1 text-sm text-red-500`}>Email is required</Text>
        )}
      </View>
      {showPassord && (
        <View>
          <Text style={tw`py-2 font-semibold text-sm text-mainColor`}>
            Password
          </Text>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <BottomSheetTextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={tw`p-3 border rounded-lg mb-3`}
                placeholder="Password"
                secureTextEntry={true}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={tw`my-2 text-sm text-red-500`}>
              Password is required to change email
            </Text>
          )}
        </View>
      )}
      {updated && !updating && (
        <Text style={tw`my-2 text-sm text-green-500`}>Profile updated!</Text>
      )}
      {error && (
        <Text style={tw`my-2 text-sm text-green-500`}>{error.message}</Text>
      )}
      <Button
        text={"Save"}
        textStyle={tw`px-10 py-4`}
        isLoading={updating}
        disabled={updating}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

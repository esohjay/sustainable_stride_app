import React, { useEffect } from "react";
import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import { useForm, Controller } from "react-hook-form";
import { Button } from "./UI/Button";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { useAuthActions } from "../context/actions/auth_actions";
import { useAuthContext } from "../context/providers/AuthProvider";
import { UPDATE_PROFILE_RESET } from "../context/constants/auth_constants";
import { reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { auth } from "../lib/firebaseConfig";
import { SIGN_IN_FAIL } from "../context/constants/auth_constants";

export default function UpdatePassword() {
  const { updatePassword } = useAuthActions();
  const user = auth.currentUser;
  const { state, dispatch } = useAuthContext();
  const { updated, updating, profile, error } = state;
  const {
    control,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
      old_password: "",
    },
  });
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("root", { type: "required", message: "Password do not match" });
      return;
    }
    if (data.password && data.password.length < 6) {
      setError("root", {
        type: "minLength",
        message: "Minimum of 6 characters is required",
      });
      return;
    }
    //re-authenticate with old password and update
    const credential = EmailAuthProvider.credential(
      profile.email,
      data.old_password
    );
    reauthenticateWithCredential(user, credential)
      .then(() => {
        updatePassword({ password: data.password });
      })
      .catch((error) => {
        // An error ocurred
        setError("root", { message: "Old password is incorrect" });
        return;
        // ...
      });
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
    if (updated) {
      const credential = EmailAuthProvider.credential(
        profile.email,
        getValues("password")
      );
      reauthenticateWithCredential(user, credential)
        .then(() => {
          console.log("re-auth");
        })
        .catch((error) => {
          // An error ocurred
          dispatch({ type: SIGN_IN_FAIL, payload: error });
          // ...
        });
    }
  }, [updated]);
  return (
    <View style={tw`py-3`}>
      <Text style={tw`font-semibold text-base mb-2 text-mainColor`}>
        Change password
      </Text>
      <View>
        <Text style={tw`py-2 font-semibold text-sm text-mainColor`}>
          Old password
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
              placeholder="Old password"
              secureTextEntry={true}
            />
          )}
          name="old_password"
        />
        {errors.old_password && (
          <Text style={tw`mt-1 text-sm text-red-500`}>
            Password is required
          </Text>
        )}
      </View>
      <View>
        <Text style={tw`py-2 font-semibold text-sm text-mainColor`}>
          New password
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
              style={tw`p-3 border rounded-lg mb-3`}
              placeholder="New password"
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
        <Text style={tw`py-2 font-semibold text-sm text-mainColor`}>
          Confirm password
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
              secureTextEntry={true}
              style={tw`p-3 border rounded-lg mb-3`}
              placeholder="Repeat password"
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
      {errors.root && (
        <Text style={tw`my-2 text-sm text-red-500`}>{errors.root.message}</Text>
      )}
      {updated && !updating && (
        <Text style={tw`my-2 text-sm text-green-500`}>Password updated!</Text>
      )}
      {error && <Text style={tw`my-2 text-sm text-green-500`}>{error}</Text>}
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

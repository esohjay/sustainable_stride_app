import { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import tw from "../lib/tailwind";
import { TextInput } from "../components/UI/TextInput";
import AviodKeyBoardViewWrapper from "../components/AviodKeyBoardViewWrapper";
// import { auth } from "../lib/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useForm, Controller } from "react-hook-form";
import { useAuthActions } from "../context/actions/auth_actions";
import { useAuthContext } from "../context/providers/AuthProvider";
import { formatError } from "../lib/firebaseError";
import { Button } from "../components/UI/Button";

function Register({ navigation }) {
  const { state } = useAuthContext();
  const { error } = state;
  const [errorMsg, setErrorMsg] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const { signUp, createProfile } = useAuthActions();
  //   const auth = getAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    reValidateMode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.confirmPassword) {
      return setPasswordErr("password do not match");
      // return setError("passwordMatch", { type: "manual" });
      // reset({ confirmPassword: "", password: "" }, { keepDirtyValues: true });
    }
    setPasswordErr("");
    createProfile(data);
  };
  useEffect(() => {
    if (error) {
      const formattedError = formatError(error);
      setErrorMsg(formattedError);
    }
  }, [error]);
  return (
    <AviodKeyBoardViewWrapper>
      <View style={tw`bg-gray-100 h-full`}>
        <View style={tw`flex pt-10 justify-center items-center px-5`}>
          <View style={tw`w-full h-20 mb-1 bg-transparent`}>
            <Image
              style={tw`w-full h-full max-w-full max-h-full bg-transparent`}
              resizeMode="contain"
              source={require("../assets/logo.png")}
            />
          </View>
          <Text style={tw`text-dark font-bold text-lg`}>
            Create your account
          </Text>
          <View style={tw`w-full py-3`}>
            <View style={tw`flex gap-3`}>
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
                      icon="person"
                      placeholder="Olusoji Daramola"
                      label={"Full name"}
                    />
                  )}
                  name="fullName"
                />
                {errors.fullName && (
                  <Text style={tw`mt-1 text-sm text-red-500`}>
                    Full name is required
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
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      icon="mail"
                      keyboardType="email-address"
                      placeholder="example@email.com"
                      label={"Email"}
                    />
                  )}
                  name="email"
                />
                {errors.email && (
                  <Text style={tw`mt-1 text-sm text-red-500`}>
                    Email is required
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
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      icon="lock-closed"
                      placeholder="xxxxxxxx"
                      label={"Password"}
                      isPassowrd={true}
                      isPassowrdField={true}
                      showPassword={showPassword}
                      setShowPassword={setShowPassword}
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
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      icon="lock-closed"
                      placeholder="xxxxxxxx"
                      label={"Confirm password"}
                      isPassowrdField={true}
                      isPassowrd={true}
                      showPassword={showConfirmPassword}
                      setShowPassword={setShowConfirmPassword}
                    />
                  )}
                  name="confirmPassword"
                />
                {errors.confirmPassword && (
                  <Text style={tw`mt-1 text-sm text-red-500`}>
                    Confirm password is required
                  </Text>
                )}
                {errors.passwordMatch && (
                  <Text style={tw`mt-1 text-sm text-red-500`}>
                    Password do not match
                  </Text>
                )}
              </View>
              {passwordErr && (
                <Text style={tw`mt-1 text-sm text-red-500`}>{passwordErr}</Text>
              )}
              {error && (
                <Text style={tw`mt-1 text-sm text-red-500`}>{errorMsg}</Text>
              )}
              <View style={tw`my-5`}>
                <Button
                  text={"Sign up"}
                  textStyle={tw`px-10 py-4`}
                  isLoading={state.loading}
                  // onPress={() => reset()}
                  onPress={handleSubmit(onSubmit)}
                />
                <Text
                  onPress={() => navigation.navigate("Login")}
                  style={tw`text-mainColor underline text-center font-semibold py-3`}
                >
                  Already have an account? Log in
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </AviodKeyBoardViewWrapper>
  );
}

export default Register;

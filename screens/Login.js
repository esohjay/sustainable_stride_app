import { useState } from "react";
import { View, Text, Image } from "react-native";
import tw from "../lib/tailwind";
import { TextInput } from "../components/UI/TextInput";
import { Button } from "../components/UI/Button";
import AviodKeyBoardViewWrapper from "../components/AviodKeyBoardViewWrapper";
import { useForm, Controller } from "react-hook-form";
import { useAuthActions } from "../context/actions/auth_actions";
import { useAuthContext } from "../context/providers/AuthProvider";

function Login({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const { state } = useAuthContext();
  const { isAuthenticated, error } = state;
  const { signIn } = useAuthActions();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    signIn({ email: data.email, password: data.password });
  };

  return (
    <AviodKeyBoardViewWrapper>
      <View style={tw`bg-gray-100 h-full`}>
        <View style={tw`flex pt-10 px-5 justify-center items-center`}>
          <View style={tw`w-full h-20 mb-3 bg-transparent`}>
            <Image
              style={tw`w-full h-full max-w-full max-h-full bg-transparent`}
              resizeMode="contain"
              source={require("../assets/logo.png")}
            />
          </View>
          <View style={tw`w-full h-64 mb-5 bg-transparent`}>
            <Image
              style={tw`w-full h-full max-w-full max-h-full bg-transparent`}
              resizeMode="contain"
              source={require("../assets/login.png")}
            />
          </View>
          <Text style={tw`text-dark font-bold text-2xl mb-3`}>
            Welcome back!
          </Text>
          <View style={tw`flex gap-3 w-full`}>
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
            {error && (
              <Text style={tw`mt-1 text-sm text-red-500`}>
                {error.includes("invalid-credential")
                  ? "Incorrect email or password"
                  : error}
              </Text>
            )}
            <View style={tw`my-5`}>
              <Button
                text={"Login"}
                textStyle={tw`px-10 py-4`}
                isLoading={state.loading}
                onPress={handleSubmit(onSubmit)}
              />
              <Text
                onPress={() => navigation.navigate("Register")}
                style={tw`text-mainColor underline text-center font-semibold py-3`}
              >
                Don't have an account? Sign up
              </Text>
            </View>
          </View>
        </View>
      </View>
    </AviodKeyBoardViewWrapper>
  );
}

export default Login;

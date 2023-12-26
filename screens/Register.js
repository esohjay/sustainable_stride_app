import { useState } from "react";
import { View, Image, Text } from "react-native";
import tw from "../lib/tailwind";
import { TextInput } from "../components/UI/TextInput";
import AviodKeyBoardViewWrapper from "../components/AviodKeyBoardViewWrapper";

import { Button } from "../components/UI/Button";

function Register({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
              <TextInput
                icon="person"
                placeholder="Olusoji Daramola"
                label={"Full name"}
              />
              <TextInput
                icon="mail"
                placeholder="example@email.com"
                label={"Email"}
              />

              <TextInput
                icon="lock-closed"
                placeholder="xxxxxxxx"
                label={"Password"}
                isPassowrd={true}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />

              <TextInput
                icon="lock-closed"
                placeholder="xxxxxxxx"
                label={"Confirm password"}
                isPassowrd={true}
                showPassword={showConfirmPassword}
                setShowPassword={setShowConfirmPassword}
              />
              <View style={tw`my-5`}>
                <Button
                  text={"Sign up"}
                  textStyle={tw`px-10 py-4`}
                  onPress={() => navigation.navigate("HomeScreen")}
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

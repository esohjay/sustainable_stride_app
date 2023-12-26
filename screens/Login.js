import { useState } from "react";
import { View, Text, Image } from "react-native";
import tw from "../lib/tailwind";
import { TextInput } from "../components/UI/TextInput";
import { Button } from "../components/UI/Button";
import AviodKeyBoardViewWrapper from "../components/AviodKeyBoardViewWrapper";

function Login({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

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

            <View style={tw`my-5`}>
              <Button
                text={"Login"}
                textStyle={tw`px-10 py-4`}
                onPress={() => navigation.navigate("HomeScreen")}
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

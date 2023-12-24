import { View, Image, Text } from "react-native";
import tw from "../lib/tailwind";
import { TextInput } from "../components/UI/TextInput";
import AviodKeyBoardViewWrapper from "../components/AviodKeyBoardViewWrapper";

import { Button } from "../components/UI/Button";

function Register() {
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
              <TextInput />
              <TextInput />
              <TextInput />
              <TextInput />
              <TextInput />
            </View>
          </View>
        </View>
      </View>
    </AviodKeyBoardViewWrapper>
  );
}

export default Register;

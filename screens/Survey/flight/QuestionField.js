import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { TextInput } from "../../../components/UI/TextInput";
export default function QuestionField({ label, field, setValue, value }) {
  return (
    <View style={tw`flex flex-row items-center gap-x-2`}>
      <Text style={tw`w-1/2 text-base font-semibold text-dark`}>{label}</Text>
      <View style={tw`w-1/3`}>
        <TextInput
          onChangeText={(text) => setValue(field, text)}
          keyboardType="number-pad"
          placeholder="0"
          border={true}
          value={value}
        />
      </View>
    </View>
  );
}

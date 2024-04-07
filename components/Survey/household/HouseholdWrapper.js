import { View, Text } from "react-native";
import QuestionOne from "./QuestionOne";
// import { TextInput } from "../UI/TextInput";
import { Ionicons } from "@expo/vector-icons";
// import { Button } from "../UI/Button";
import tw from "../../../lib/tailwind";

export default function HouseholdWrapper() {
  return (
    <View style={tw`p-5`}>
      {/* Heading */}
      <View style={tw`flex gap-y-2`}>
        <View style={tw`flex flex-row items-center gap-x-2`}>
          <View
            style={tw`flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 p-2`}
          >
            <Ionicons name="home-outline" size={24} color="white" />
          </View>
          <View style={tw`flex flex-row gap-x-5 items-center`}>
            <Text style={tw`font-bold capitalize text-dark text-xl`}>
              Household
            </Text>
            <Text style={tw`font-bold capitalize text-dark text-xl`}>1 of</Text>
          </View>
        </View>
        <View style={tw`w-full flex flex-row bg-gray-300 p-[2px] rounded-full`}>
          <View style={tw` w-1/3  bg-blue-500 h-1 rounded-md`}></View>
          <View style={tw` w-1/3 bg-blue-500 h-1 rounded-md`}></View>
          <View style={tw` w-1/3 bg-blue-500 h-1 rounded-md`}></View>
        </View>
      </View>
      {/* Form */}
      <View style={tw`py-4`}>
        <QuestionOne />
      </View>
    </View>
  );
}

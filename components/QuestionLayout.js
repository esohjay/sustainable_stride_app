import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../lib/tailwind";
import { CustomScrollView } from "../context/providers/ScrollContext";
import { Button } from "./UI/Button";
import { useNavigation } from "@react-navigation/native";
import { useSurveyContext } from "../context/providers/SurveyProvider";

export default function QuestionLayout({
  section,
  iconName,
  color,
  percentage,
  disabled,
  nextScreen,
  btnText = "Next",
  children,
}) {
  const navigate = useNavigation();
  const { state } = useSurveyContext();
  return (
    <View style={tw`p-5`}>
      {/* Heading */}
      <View style={tw`flex gap-y-2`}>
        <View style={tw`flex flex-row items-center gap-x-2`}>
          <View
            style={tw`flex items-center justify-center h-10 w-10 rounded-full ${color} p-2`}
          >
            <Ionicons name={iconName} size={24} color="white" />
          </View>
          <View style={tw`flex flex-row gap-x-5 items-center`}>
            <Text style={tw`font-bold capitalize text-dark text-xl`}>
              {section}
            </Text>
            <Text style={tw`font-bold capitalize text-dark text-xl`}></Text>
          </View>
        </View>
        <View style={tw`w-full flex flex-row bg-gray-300 p-[2px] rounded-full`}>
          <View style={tw` w-[${percentage}%]  ${color} h-1 rounded-md`}></View>
        </View>
      </View>
      {/* Form */}
      <View style={tw`py-4`}>
        <View style={tw`pb-3`}>{children}</View>
        <View style={tw`mt-5 flex gap-2`}>
          <Button
            variant={disabled ? "disabled" : "black"}
            height="45"
            textStyle={tw`text-base`}
            text={btnText}
            disabled={disabled}
            onPress={nextScreen}
            isLoading={state?.loading}
          />
          <Text
            style={tw`text-center font-bold py-2 underline text-mainColor`}
            onPress={() => navigate.goBack()}
          >
            Back
          </Text>
        </View>
      </View>
    </View>
  );
}

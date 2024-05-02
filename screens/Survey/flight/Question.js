import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import QuestionField from "./QuestionField";
import QuestionContainer from "./QuestionContainer";

export default function FlightQuestion() {
  const { addAnswer, surveyData } = useSurveyContext();
  console.log(surveyData);
  const setValue = (field, value) => {
    addAnswer({
      flight: {
        ...surveyData.flight,
        [field]: value,
      },
    });
  };
  return (
    <View style={tw``}>
      <Text style={tw`font-semibold text-lg mb-3 text-mainColor`}>
        How many flight do you take yearly
      </Text>
      <QuestionContainer
        setValue={setValue}
        flight={{
          domestic: surveyData?.flight?.domestic,
          shortHaul: surveyData?.flight?.shortHaul,
          longHaul: surveyData?.flight?.longHaul,
        }}
      />
    </View>
  );
}

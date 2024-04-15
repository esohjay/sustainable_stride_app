import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import QuestionField from "./QuestionField";

export default function FlightQuestion() {
  const { addAnswer, surveyData } = useSurveyContext();
  console.log(surveyData);
  const setValue = (trip, field, value) => {
    addAnswer({
      flight: {
        ...surveyData.flight,
        [trip]: {
          ...surveyData.flight[trip],
          [field]: value,
        },
      },
    });
  };
  return (
    <View>
      <Text style={tw`font-semibold text-lg mb-3 text-mainColor`}>
        How many flight do you take yearly
      </Text>
      <View style={tw`flex gap-y-3 py-4 mb-3`}>
        <Text style={tw`text-base font-semibold text-mainColor`}>
          Round trip
        </Text>
        {/* Domestic */}
        <QuestionField
          value={surveyData?.flight?.withRf?.domestic}
          label={"Domestic (~1 hour)"}
          trip={"withRf"}
          field={"domestic"}
          setValue={setValue}
        />
        {/* shortHaul */}
        <QuestionField
          value={surveyData?.flight?.withRf?.shortHaul}
          label={"Short haul (~2 hours)"}
          trip={"withRf"}
          field={"shortHaul"}
          setValue={setValue}
        />
        {/* longHaul */}
        <QuestionField
          value={surveyData?.flight?.withRf?.longHaul}
          label={"Long haul (8+ hours)"}
          trip={"withRf"}
          field={"longHaul"}
          setValue={setValue}
        />
      </View>
      <View style={tw`flex gap-y-3 py-4 mb-3`}>
        <Text style={tw`text-base font-semibold text-mainColor`}>
          One way trip
        </Text>
        {/* Domestic */}
        <QuestionField
          value={surveyData?.flight?.withoutRf?.domestic}
          label={"Domestic (~1 hour)"}
          trip={"withoutRf"}
          field={"domestic"}
          setValue={setValue}
        />
        {/* shortHaul */}
        <QuestionField
          value={surveyData?.flight?.withoutRf?.shortHaul}
          label={"Short haul (~2 hours)"}
          trip={"withoutRf"}
          field={"shortHaul"}
          setValue={setValue}
        />
        {/* longHaul */}
        <QuestionField
          value={surveyData?.flight?.withoutRf?.longHaul}
          label={"Long haul (8+ hours)"}
          trip={"withoutRf"}
          field={"longHaul"}
          setValue={setValue}
        />
      </View>
    </View>
  );
}

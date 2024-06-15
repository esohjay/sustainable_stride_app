import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import QuestionContainer from "./QuestionContainer";
import { useSurveyActions } from "../../../context/actions/survey_actions";

export default function FlightQuestion() {
  const { addAnswer, surveyData, state } = useSurveyContext();
  const { survey } = state;
  const { updateSurvey } = useSurveyActions();
  const setValue = (field, value) => {
    updateSurvey({
      flight: {
        ...survey.survey.flight,
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
          domestic: survey.survey?.flight?.domestic,
          shortHaul: survey.survey?.flight?.shortHaul,
          longHaul: survey.survey?.flight?.longHaul,
        }}
      />
    </View>
  );
}

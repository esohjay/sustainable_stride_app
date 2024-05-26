import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import QuestionContainer from "./QuestionContainer";
import { useSurveyActions } from "../../../context/actions/survey_actions";

export default function PublicTransportQuestion() {
  const { updateSurvey } = useSurveyActions();
  const { addAnswer, surveyData, state } = useSurveyContext();
  const { survey } = state;
  const setPeriod = (field, period) => {
    updateSurvey({
      publicTransport: {
        ...survey.survey.publicTransport,
        [field]: {
          ...survey.survey.publicTransport[field],
          period,
        },
      },
    });
  };
  const setValue = (field, value) => {
    updateSurvey({
      publicTransport: {
        ...survey.survey.publicTransport,
        [field]: {
          ...survey.survey.publicTransport[field],
          value,
        },
      },
    });
  };
  const setUnit = (field, unit) => {
    updateSurvey({
      publicTransport: {
        ...survey.survey.publicTransport,
        [field]: {
          ...survey.survey.publicTransport[field],
          unit,
        },
      },
    });
  };
  return (
    <View>
      <Text style={tw`font-semibold text-lg mb-3 py-2 text-mainColor`}>
        Which public transport do you use?{" "}
      </Text>
      <QuestionContainer
        value={{
          bus: survey.survey?.publicTransport?.bus?.value,
          coach: survey.survey?.publicTransport?.coach?.value,
          train: survey.survey?.publicTransport?.train?.value,
        }}
        setUnit={setUnit}
        setValue={setValue}
        setPeriod={setPeriod}
        allowPeriod={true}
        dropdownPeriodValue={{
          bus: survey.survey?.publicTransport?.bus?.period,
          coach: survey.survey?.publicTransport?.coach?.period,
          train: survey.survey?.publicTransport?.train?.period,
        }}
        dropdownUnitValue={{
          bus: survey.survey?.publicTransport?.bus?.unit,
          coach: survey.survey?.publicTransport?.coach?.unit,
          train: survey.survey?.publicTransport?.train?.unit,
        }}
      />
    </View>
  );
}

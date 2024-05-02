import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import QuestionField from "./QuestionField";
import QuestionContainer from "./QuestionContainer";

export default function PublicTransportQuestion() {
  const { addAnswer, surveyData } = useSurveyContext();
  const setPeriod = (field, period) => {
    addAnswer({
      publicTransport: {
        ...surveyData.publicTransport,
        [field]: {
          ...surveyData.publicTransport[field],
          period,
        },
      },
    });
  };
  const setValue = (field, value) => {
    addAnswer({
      publicTransport: {
        ...surveyData.publicTransport,
        [field]: {
          ...surveyData.publicTransport[field],
          value,
        },
      },
    });
  };
  const setUnit = (field, unit) => {
    addAnswer({
      publicTransport: {
        ...surveyData.publicTransport,
        [field]: {
          ...surveyData.publicTransport[field],
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
          bus: surveyData?.publicTransport?.bus?.value,
          coach: surveyData?.publicTransport?.coach?.value,
          train: surveyData?.publicTransport?.train?.value,
        }}
        setUnit={setUnit}
        setValue={setValue}
        setPeriod={setPeriod}
        allowPeriod={true}
        dropdownPeriodValue={{
          bus: surveyData?.publicTransport?.bus?.period,
          coach: surveyData?.publicTransport?.coach?.period,
          train: surveyData?.publicTransport?.train?.period,
        }}
        dropdownUnitValue={{
          bus: surveyData?.publicTransport?.bus?.unit,
          coach: surveyData?.publicTransport?.coach?.unit,
          train: surveyData?.publicTransport?.train?.unit,
        }}
      />
    </View>
  );
}

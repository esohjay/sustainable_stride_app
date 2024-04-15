import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import QuestionField from "./QuestionField";

export default function ServicesQuestion() {
  const { addAnswer, surveyData } = useSurveyContext();
  console.log(surveyData);
  const setPeriod = (field, period) => {
    addAnswer({
      servicesConsumption: {
        ...surveyData.servicesConsumption,
        [field]: {
          ...surveyData.servicesConsumption[field],
          period,
        },
      },
    });
  };
  const setValue = (field, value) => {
    addAnswer({
      servicesConsumption: {
        ...surveyData.servicesConsumption,
        [field]: {
          ...surveyData.servicesConsumption[field],
          value,
        },
      },
    });
  };

  return (
    <View>
      <Text style={tw`font-semibold text-lg mb-3 py-2 text-mainColor`}>
        How much do you/your household spend on average on each of the following
        services over a month/year?
      </Text>
      <View style={tw`flex gap-y-3`}>
        {/* medicalServices */}
        <QuestionField
          label={"Medical service (£)"}
          field={"medicalServices"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={
            surveyData?.servicesConsumption?.medicalServices?.period
          }
        />
        {/* education */}
        <QuestionField
          label={"Education (£)"}
          field={"education"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={surveyData?.servicesConsumption?.education?.period}
        />

        {/* veterinaryServices */}
        <QuestionField
          label={"Veterinary Services (£)"}
          field={"veterinaryServices"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={
            surveyData?.servicesConsumption?.veterinaryServices?.period
          }
        />
        {/* financialServices */}
        <QuestionField
          label={"Financial Services (£)"}
          field={"financialServices"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={
            surveyData?.servicesConsumption?.financialServices?.period
          }
        />
        {/* saloonAndGrooming */}
        <QuestionField
          label={"Saloon and grooming (£)"}
          field={"saloonAndGrooming"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={
            surveyData?.servicesConsumption?.saloonAndGrooming?.period
          }
        />
      </View>
    </View>
  );
}

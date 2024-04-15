import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import { TextInput } from "../../../components/UI/TextInput";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { DropdownSelect } from "../../../components/Dropdown";
import QuestionField from "./QuestionField";

export default function PublicTransportQuestion() {
  const { addAnswer, surveyData } = useSurveyContext();
  console.log(surveyData);
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
  const busUnit = (unit) => {
    addAnswer({
      // ...surveyData,
      publicTransport: {
        ...surveyData.publicTransport,
        bus: {
          ...surveyData.publicTransport.bus,
          unit,
        },
      },
    });
  };
  const coachUnit = (unit) => {
    addAnswer({
      // ...surveyData,
      publicTransport: {
        ...surveyData.publicTransport,
        coach: {
          ...surveyData.publicTransport.coach,
          unit,
        },
      },
    });
  };
  const trainUnit = (unit) => {
    addAnswer({
      // ...surveyData,
      publicTransport: {
        ...surveyData.publicTransport,
        train: {
          ...surveyData.publicTransport.train,
          unit,
        },
      },
    });
  };
  const setTrainPeriod = (period) => {
    addAnswer({
      // ...surveyData,
      publicTransport: {
        ...surveyData.publicTransport,
        train: {
          ...surveyData.publicTransport.train,
          period,
        },
      },
    });
  };
  const setCoachPeriod = (period) => {
    addAnswer({
      // ...surveyData,
      publicTransport: {
        ...surveyData.publicTransport,
        coach: {
          ...surveyData.publicTransport.coach,
          period,
        },
      },
    });
  };
  const setBusPeriod = (period) => {
    addAnswer({
      // ...surveyData,
      publicTransport: {
        ...surveyData.publicTransport,
        bus: {
          ...surveyData.publicTransport.bus,
          period,
        },
      },
    });
  };
  return (
    <View>
      <Text style={tw`font-semibold text-lg mb-3 py-2 text-mainColor`}>
        Which public transport do you use?{" "}
      </Text>
      <View style={tw`flex gap-y-3`}>
        {/* Bus */}

        <QuestionField
          label={"Bus"}
          field={"bus"}
          value={surveyData?.publicTransport?.bus?.value}
          setUnit={setUnit}
          setValue={setValue}
          setPeriod={setPeriod}
          dropdownPeriodValue={surveyData?.publicTransport?.bus?.period}
          dropdownUnitValue={surveyData?.publicTransport?.bus?.unit}
        />
        {/* Coach */}
        <QuestionField
          label={"Coach"}
          field={"coach"}
          value={surveyData?.publicTransport?.coach?.value}
          setUnit={setUnit}
          setValue={setValue}
          setPeriod={setPeriod}
          dropdownPeriodValue={surveyData?.publicTransport?.coach?.period}
          dropdownUnitValue={surveyData?.publicTransport?.coach?.unit}
        />

        {/* Train */}
        <QuestionField
          label={"Train"}
          field={"train"}
          value={surveyData?.publicTransport?.train?.value}
          setUnit={setUnit}
          setValue={setValue}
          setPeriod={setPeriod}
          dropdownPeriodValue={surveyData?.publicTransport?.train?.period}
          dropdownUnitValue={surveyData?.publicTransport?.train?.unit}
        />
      </View>
    </View>
  );
}

import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import QuestionField from "./QuestionField";

export default function EnergyQuestion() {
  const { addAnswer, surveyData } = useSurveyContext();
  const setUnit = (field, unit) => {
    addAnswer({
      energy: {
        ...surveyData.energy,
        [field]: {
          ...surveyData.energy[field],
          unit,
        },
      },
    });
  };
  const setValue = (field, value) => {
    addAnswer({
      energy: {
        ...surveyData.energy,
        [field]: {
          ...surveyData.energy[field],
          value,
        },
      },
    });
  };

  return (
    <View>
      <Text style={tw`font-semibold text-lg mb-3 text-mainColor`}>
        Enter your consumption of each of the following
      </Text>
      <View style={tw`flex gap-y-4 py-5`}>
        {/* Electricity */}
        <QuestionField
          label={"Electricity"}
          field={"electricity"}
          setUnit={setUnit}
          setValue={setValue}
          dropdownOptions={[{ label: "kWh", value: "kWh" }]}
          dropdownValue={surveyData?.energy?.electricity?.unit}
        />

        {/* Gas */}
        <QuestionField
          label={"Gas"}
          field={"gas"}
          setUnit={setUnit}
          setValue={setValue}
          dropdownOptions={[
            { label: "kWh", value: "kWh" },
            { label: "Cubic meter", value: "cubicMeter" },
            { label: "Tonne", value: "tonne" },
          ]}
          dropdownValue={surveyData?.energy?.gas?.unit}
        />

        {/* Coal */}
        <QuestionField
          label={"Coal"}
          field={"coal"}
          setUnit={setUnit}
          setValue={setValue}
          dropdownOptions={[
            { label: "kWh", value: "kWh" },
            { label: "Tonne", value: "tonne" },
          ]}
          dropdownValue={surveyData?.energy?.coal?.unit}
        />

        {/* Lpg */}
        <QuestionField
          label={"LPG"}
          field={"lpg"}
          setUnit={setUnit}
          setValue={setValue}
          dropdownOptions={[
            { label: "Litre", value: "litre" },
            { label: "Tonne", value: "tonne" },
          ]}
          dropdownValue={surveyData?.energy?.lpg?.unit}
        />

        {/* Propane */}
        <QuestionField
          label={"Propane"}
          field={"propane"}
          setUnit={setUnit}
          setValue={setValue}
          dropdownOptions={[
            { label: "Litre", value: "litre" },
            { label: "Tonne", value: "tonne" },
            { label: "kWh", value: "kWh" },
          ]}
          dropdownValue={surveyData?.energy?.propane?.unit}
        />

        {/* Wood */}
        <QuestionField
          label={"Wood"}
          field={"wood"}
          setUnit={setUnit}
          setValue={setValue}
          dropdownOptions={[
            { label: "Tonne", value: "tonne" },
            { label: "kWh", value: "kWh" },
          ]}
          dropdownValue={surveyData?.energy?.wood?.unit}
        />
      </View>
    </View>
  );
}

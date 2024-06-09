import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import QuestionField from "./QuestionField";
import { useSurveyActions } from "../../../context/actions/survey_actions";

export default function EnergyQuestion() {
  const { state } = useSurveyContext();
  const { survey } = state;
  console.log(survey);
  console.log("###########");
  console.log(state);
  const { updateSurvey } = useSurveyActions();
  const setUnit = (field, unit) => {
    updateSurvey({
      energy: {
        ...survey.survey.energy,
        [field]: {
          ...survey.survey.energy[field],
          unit,
        },
      },
    });
  };
  const setValue = (field, value) => {
    updateSurvey({
      energy: {
        ...survey.survey.energy,
        [field]: {
          ...survey.survey.energy[field],
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
          dropdownValue={survey.survey?.energy?.electricity?.unit}
          inputValue={survey.survey?.energy?.electricity?.value}
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
          dropdownValue={survey.survey?.energy?.gas?.unit}
          inputValue={survey.survey?.energy?.gas?.value}
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
          dropdownValue={survey.survey?.energy?.coal?.unit}
          inputValue={survey.survey?.energy?.coal?.value}
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
          dropdownValue={survey.survey?.energy?.lpg?.unit}
          inputValue={survey.survey?.energy?.lpg?.value}
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
          dropdownValue={survey.survey?.energy?.propane?.unit}
          inputValue={survey.survey?.energy?.propane?.value}
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
          dropdownValue={survey.survey?.energy?.wood?.unit}
          inputValue={survey.survey?.energy?.wood?.value}
        />
      </View>
    </View>
  );
}

import React from "react";
import { View } from "react-native";
import QuestionField from "./QuestionField";
import tw from "../../../lib/tailwind";

export default function QuestionContainer({
  value,
  setPeriod,
  setUnit,
  setValue,
  allowPeriod,
  dropdownPeriodValue,
  dropdownUnitValue,
}) {
  return (
    <View style={tw`flex gap-y-3`}>
      {/* Bus */}

      <QuestionField
        label={"Bus"}
        field={"bus"}
        value={value.bus}
        setUnit={setUnit}
        setValue={setValue}
        setPeriod={setPeriod}
        allowPeriod={allowPeriod}
        dropdownPeriodValue={dropdownPeriodValue.bus}
        dropdownUnitValue={dropdownUnitValue.bus}
      />
      {/* Coach */}
      <QuestionField
        label={"Coach"}
        field={"coach"}
        value={value.coach}
        setUnit={setUnit}
        setValue={setValue}
        setPeriod={setPeriod}
        allowPeriod={allowPeriod}
        dropdownPeriodValue={dropdownPeriodValue.coach}
        dropdownUnitValue={dropdownUnitValue.coach}
      />

      {/* Train */}
      <QuestionField
        label={"Train"}
        field={"train"}
        value={value.train}
        setUnit={setUnit}
        setValue={setValue}
        setPeriod={setPeriod}
        allowPeriod={allowPeriod}
        dropdownPeriodValue={dropdownPeriodValue.train}
        dropdownUnitValue={dropdownUnitValue.train}
      />
    </View>
  );
}

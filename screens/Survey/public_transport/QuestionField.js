import React from "react";
import { View } from "react-native";
import tw from "../../../lib/tailwind";
import { TextInput } from "../../../components/UI/TextInput";
import { DropdownSelect } from "../../../components/Dropdown";
export default function QuestionField({
  label,
  field,
  setValue,
  value,
  setUnit,
  dropdownPeriodValue,
  setPeriod,
  dropdownUnitValue,
}) {
  return (
    <View style={tw`flex flex-row items-end gap-x-3`}>
      <View style={tw`w-1/3`}>
        <TextInput
          onChangeText={(text) => setValue(field, text)}
          value={value}
          keyboardType="numeric"
          placeholder="0"
          label={label}
          border={true}
        />
      </View>
      <View style={tw`w-1/4`}>
        <DropdownSelect
          options={[
            { label: "Km", value: "km" },
            { label: "Mile", value: "mile" },
          ]}
          onSelect={setUnit}
          value={dropdownUnitValue}
          onSelectArg={field}
        />
      </View>
      <View style={tw`w-1/3`}>
        <DropdownSelect
          options={[
            { label: "Monthly", value: "monthly" },
            { label: "Yearly", value: "yearly" },
          ]}
          onSelect={setPeriod}
          placeholder="Period"
          value={dropdownPeriodValue}
          onSelectArg={field}
        />
      </View>
    </View>
  );
}

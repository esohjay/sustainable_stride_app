import React from "react";
import { View } from "react-native";
import tw from "../../../lib/tailwind";
import { TextInput } from "../../../components/UI/TextInput";
import { DropdownSelect } from "../../../components/Dropdown";
export default function QuestionField({
  label,
  field,
  setValue,
  setUnit,
  dropdownValue,
  dropdownOptions,
}) {
  return (
    <View style={tw`flex flex-row items-end gap-x-3`}>
      <View style={tw`w-1/2`}>
        <TextInput
          onChangeText={(text) => setValue(field, text)}
          keyboardType="numeric"
          placeholder="0"
          label={label}
          border={true}
        />
      </View>

      <View style={tw`w-1/3`}>
        <DropdownSelect
          options={[...dropdownOptions]}
          onSelect={setUnit}
          value={dropdownValue}
          onSelectArg={field}
        />
      </View>
    </View>
  );
}

import React from "react";
import { View, Text } from "react-native";
import tw from "../lib/tailwind";
import { DropdownSelect } from "./Dropdown";
import { TextInput } from "./UI/TextInput";

export default function BikeQuestionForm({
  setPeriod,
  setUnit,
  setSize,
  setValue,
  period,
  unit,
  size,
  value,
  allowPeriod,
}) {
  return (
    <View>
      <View style={tw`flex mb-3`}>
        <View style={tw`w-2/3`}>
          <Text style={tw`font-semibold mb-2 text-dark`}>Motorbike size</Text>
          <DropdownSelect
            options={[
              { label: "Small", value: "small" },
              { label: "Medium", value: "medium" },
              { label: "Large", value: "large" },
              { label: "Average", value: "average" },
            ]}
            onSelect={setSize}
            value={size}
            placeholder="Select"
          />
        </View>
      </View>
      <View>
        <Text style={tw`font-semibold mb-2 text-dark`}>Distance travelled</Text>
        <View style={tw`flex flex-row items-end gap-x-3`}>
          <View style={tw`w-1/3`}>
            <TextInput
              onChangeText={(text) => setValue(text)}
              keyboardType="number-pad"
              placeholder="0"
              // label={"Distance travelled"}
              border={true}
              value={value}
            />
          </View>
          <View style={tw`w-1/4`}>
            <DropdownSelect
              options={[
                { label: "Km", value: "km" },
                { label: "Mile", value: "mile" },
              ]}
              onSelect={setUnit}
              value={unit}
            />
          </View>
          {allowPeriod && (
            <View style={tw`w-1/3`}>
              <DropdownSelect
                options={[
                  { label: "Monthly", value: "monthly" },
                  { label: "Yearly", value: "yearly" },
                ]}
                onSelect={setPeriod}
                value={period}
                placeholder="Period"
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

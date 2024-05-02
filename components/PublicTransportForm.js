import React from "react";
import { View, Text } from "react-native";
import { DropdownSelect } from "./Dropdown";
import tw from "../lib/tailwind";
import { TextInput } from "./UI/TextInput";

export default function PublicTransportForm({
  setValue,

  distance,

  unit,
  transportMode,
}) {
  return (
    <View style={tw`flex gap-y-3`}>
      <View style={tw`flex flex-row gap-x-3 mb-3`}>
        <View style={tw`w-[70%]`}>
          <Text style={tw`font-semibold mb-2 text-dark`}>
            Public transport mode
          </Text>
          <DropdownSelect
            options={[
              { label: "Bus", value: "bus" },
              { label: "Train", value: "train" },
              { label: "Coach", value: "coach" },
            ]}
            onSelect={setValue}
            value={transportMode}
            onSelectArg="transportMode"
            placeholder="Select transport mode"
          />
        </View>
      </View>
      <View>
        <Text style={tw`font-semibold mb-2 text-dark`}>Distance travelled</Text>
        <View style={tw`flex flex-row items-end gap-x-3`}>
          <View style={tw`w-1/2`}>
            <TextInput
              onChangeText={(text) => setValue("distance", text)}
              keyboardType="number-pad"
              placeholder="0"
              // label={"Distance travelled"}
              border={true}
              value={distance}
            />
          </View>
          <View style={tw`w-1/3`}>
            <DropdownSelect
              options={[
                { label: "Km", value: "km" },
                { label: "Mile", value: "mile" },
              ]}
              onSelect={setValue}
              value={unit}
              onSelectArg="unit"
            />
          </View>
        </View>
      </View>
    </View>
  );
}

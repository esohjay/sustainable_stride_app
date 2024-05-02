import React from "react";
import { View, Text } from "react-native";
import { DropdownSelect } from "./Dropdown";
import tw from "../lib/tailwind";

export default function FlightQuestionForm({ setValue, distance, trip }) {
  return (
    <View style={tw`flex  gap-y-3 mb-3`}>
      <View style={tw``}>
        <Text style={tw`font-semibold mb-2 text-dark`}>Trip</Text>
        <DropdownSelect
          options={[
            { label: "One way trip", value: "oneWay" },
            { label: "Round trip", value: "return" },
          ]}
          onSelect={setValue}
          value={trip}
          onSelectArg="trip"
          placeholder="Select trip"
        />
      </View>
      <View style={tw``}>
        <Text style={tw`font-semibold mb-2 text-dark`}>Distance</Text>
        <DropdownSelect
          options={[
            { label: "Domestic (~1 hour)", value: "domestic" },
            { label: "Short haul (~2 hours)", value: "shortHaul" },
            { label: "Long haul (8+ hours)", value: "longHaul" },
          ]}
          onSelect={setValue}
          value={distance}
          onSelectArg="distance"
          placeholder="Select distance"
        />
      </View>
    </View>
  );
}

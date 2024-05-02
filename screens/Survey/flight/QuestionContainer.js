import React from "react";
import { View, Text } from "react-native";
import QuestionField from "./QuestionField";
import tw from "../../../lib/tailwind";

export default function QuestionContainer({ setValue, flight }) {
  return (
    <View>
      <View style={tw`flex gap-y-3 py-4 mb-3`}>
        {/* Domestic */}
        <QuestionField
          value={flight.domestic}
          label={"Domestic (~1 hour)"}
          field={"domestic"}
          setValue={setValue}
        />
        {/* shortHaul */}
        <QuestionField
          value={flight.shortHaul}
          label={"Short haul (~2 hours)"}
          field={"shortHaul"}
          setValue={setValue}
        />
        {/* longHaul */}
        <QuestionField
          value={flight.longHaul}
          label={"Long haul (8+ hours)"}
          field={"longHaul"}
          setValue={setValue}
        />
      </View>
    </View>
  );
}

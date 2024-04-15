import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { Button } from "../../../components/UI/Button";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";

export default function QuestionOne() {
  const { addAnswer, surveyData } = useSurveyContext();
  console.log(surveyData);
  return (
    <View>
      <Text style={tw`font-semibold text-lg mb-3 text-mainColor`}>
        How many people are in your household?
      </Text>
      <View style={tw`flex gap-y-4 py-5`}>
        <Button
          variant={surveyData.householdSize === 1 ? "light" : "black"}
          height="45"
          textStyle={tw`text-xl`}
          text={1}
          onPress={() => addAnswer({ householdSize: 1 })}
        />
        <Button
          variant={surveyData.householdSize === 2 ? "light" : "black"}
          height="45"
          textStyle={tw`text-xl`}
          text={2}
          onPress={() => addAnswer({ householdSize: 2 })}
        />
        <Button
          variant={surveyData.householdSize === 3 ? "light" : "black"}
          height="45"
          textStyle={tw`text-xl`}
          text={3}
          onPress={() => addAnswer({ householdSize: 3 })}
        />
      </View>
    </View>
  );
}

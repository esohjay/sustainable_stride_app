import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { Button } from "../../../components/UI/Button";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import { useSurveyActions } from "../../../context/actions/survey_actions";

export default function QuestionOne() {
  const { state } = useSurveyContext();
  const { survey } = state;
  const { updateSurvey } = useSurveyActions();
  return (
    <View>
      <Text style={tw`font-semibold text-lg mb-3 text-mainColor`}>
        How many people are in your household?
      </Text>
      <View style={tw`flex gap-y-4 py-5`}>
        <Button
          variant={survey.survey.householdSize === 1 ? "light" : "black"}
          height="45"
          textStyle={tw`text-xl`}
          text={1}
          onPress={() => updateSurvey({ householdSize: 1 })}
          // onPress={() => addAnswer({ householdSize: 1 })}
        />
        <Button
          variant={survey.survey.householdSize === 2 ? "light" : "black"}
          height="45"
          textStyle={tw`text-xl`}
          text={2}
          onPress={() => updateSurvey({ householdSize: 2 })}
        />
        <Button
          variant={survey.survey.householdSize === 3 ? "light" : "black"}
          height="45"
          textStyle={tw`text-xl`}
          text={3}
          onPress={() => updateSurvey({ householdSize: 3 })}
        />
      </View>
    </View>
  );
}

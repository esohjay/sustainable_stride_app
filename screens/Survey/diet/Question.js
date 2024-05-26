import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { Button } from "../../../components/UI/Button";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import { useSurveyActions } from "../../../context/actions/survey_actions";

export default function DietQuestion() {
  const { state } = useSurveyContext();
  const { survey } = state;
  const { updateSurvey } = useSurveyActions();
  return (
    <View>
      <Text style={tw`font-semibold text-lg mb-3 text-mainColor`}>
        How would you describe your diet?
      </Text>
      <View style={tw`flex gap-y-5 py-5`}>
        <Button
          variant={survey.survey.diet === "highMeatEater" ? "light" : "black"}
          height="45"
          textStyle={tw`text-base`}
          text={"High Meat Eater"}
          onPress={() => updateSurvey({ diet: "highMeatEater" })}
        />
        <Button
          variant={survey.survey.diet === "mediumMeatEater" ? "light" : "black"}
          height="45"
          textStyle={tw`text-base`}
          text={"Medium Meat Eater"}
          onPress={() => updateSurvey({ diet: "mediumMeatEater" })}
        />
        <Button
          variant={survey.survey.diet === "lowMeatEater" ? "light" : "black"}
          height="45"
          textStyle={tw`text-base`}
          text={"Low Meat Eater"}
          onPress={() => updateSurvey({ diet: "lowMeatEater" })}
        />
        <Button
          variant={survey.survey.diet === "fishEater" ? "light" : "black"}
          height="45"
          textStyle={tw`text-base`}
          text={"Fish Eater"}
          onPress={() => updateSurvey({ diet: "fishEater" })}
        />
        <Button
          variant={survey.survey.diet === "vegetarian" ? "light" : "black"}
          height="45"
          textStyle={tw`text-base`}
          text={"Vegetarian"}
          onPress={() => updateSurvey({ diet: "vegetarian" })}
        />
        <Button
          variant={survey.survey.diet === "vegan" ? "light" : "black"}
          height="45"
          textStyle={tw`text-base`}
          text={"Vegan"}
          onPress={() => updateSurvey({ diet: "vegan" })}
        />
      </View>
    </View>
  );
}

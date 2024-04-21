import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { Button } from "../../../components/UI/Button";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";

export default function DietQuestion() {
  const { addAnswer, surveyData } = useSurveyContext();
  return (
    <View>
      <Text style={tw`font-semibold text-lg mb-3 text-mainColor`}>
        How would you describe your diet?
      </Text>
      <View style={tw`flex gap-y-5 py-5`}>
        <Button
          variant={surveyData.diet === "highMeatEater" ? "light" : "black"}
          height="45"
          textStyle={tw`text-base`}
          text={"High Meat Eater"}
          onPress={() => addAnswer({ diet: "highMeatEater" })}
        />
        <Button
          variant={surveyData.diet === "mediumMeatEater" ? "light" : "black"}
          height="45"
          textStyle={tw`text-base`}
          text={"Medium Meat Eater"}
          onPress={() => addAnswer({ diet: "mediumMeatEater" })}
        />
        <Button
          variant={surveyData.diet === "lowMeatEater" ? "light" : "black"}
          height="45"
          textStyle={tw`text-base`}
          text={"Low Meat Eater"}
          onPress={() => addAnswer({ diet: "lowMeatEater" })}
        />
        <Button
          variant={surveyData.diet === "fishEater" ? "light" : "black"}
          height="45"
          textStyle={tw`text-base`}
          text={"Fish Eater"}
          onPress={() => addAnswer({ diet: "fishEater" })}
        />
        <Button
          variant={surveyData.diet === "vegetarian" ? "light" : "black"}
          height="45"
          textStyle={tw`text-base`}
          text={"Vegetarian"}
          onPress={() => addAnswer({ diet: "vegetarian" })}
        />
        <Button
          variant={surveyData.diet === "vegan" ? "light" : "black"}
          height="45"
          textStyle={tw`text-base`}
          text={"Vegan"}
          onPress={() => addAnswer({ diet: "vegan" })}
        />
      </View>
    </View>
  );
}

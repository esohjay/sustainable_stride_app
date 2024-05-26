import { useState } from "react";
import EnergyQuestion from "./Question";
import { Text } from "react-native";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import tw from "../../../lib/tailwind";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";
import { CustomScrollView } from "../../../context/providers/ScrollContext";

export default function Energy() {
  const [error, setError] = useState("");
  const { surveyData, state } = useSurveyContext();
  const { survey } = state;
  const nextScreen = useSurveyNextPage();
  const handleNextPage = () => {
    for (const key in surveyData.energy) {
      if (
        (survey.survey.energy[key].value && !survey.survey.energy[key].unit) ||
        (!survey.survey.energy[key].value && survey.survey.energy[key].unit)
      ) {
        setError("Ensure both value and unit are filled.");
        return;
      } else {
        setError("");
      }
    }
    nextScreen("Flight");
  };
  return (
    <CustomScrollView style={tw`bg-gray-50 `} screen="survey">
      <AviodKeyBoardViewWrapper>
        <QuestionLayout
          color={"bg-yellow-500"}
          section={"energy"}
          iconName={"flash-outline"}
          percentage={22.22}
          nextScreen={handleNextPage}
          disabled={false}
        >
          <EnergyQuestion />
          <Text style={tw`text-red-500 py-2`}>{error}</Text>
        </QuestionLayout>
      </AviodKeyBoardViewWrapper>
    </CustomScrollView>
  );
}

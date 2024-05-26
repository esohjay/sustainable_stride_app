import { useState } from "react";
import PublicTransportQuestion from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { Text } from "react-native";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { CustomScrollView } from "../../../context/providers/ScrollContext";
import tw from "../../../lib/tailwind";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";

export default function PublicTransport() {
  const { state } = useSurveyContext();
  const { survey } = state;
  const [error, setError] = useState("");
  const nextScreen = useSurveyNextPage();
  const handleNextPage = () => {
    for (const key in survey.survey.publicTransport) {
      if (
        (survey.survey.publicTransport[key].value &&
          (!survey.survey.publicTransport[key].unit ||
            !survey.survey.publicTransport[key].period)) ||
        ((survey.survey.publicTransport[key].unit ||
          survey.survey.publicTransport[key].period) &&
          !survey.survey.publicTransport[key].value)
      ) {
        setError("Ensure distance, unit and period are filled.");
        return;
      } else {
        setError("");
      }
    }
    nextScreen("Diet");
  };
  return (
    <CustomScrollView style={tw`bg-gray-50 `} screen="survey">
      <AviodKeyBoardViewWrapper>
        <QuestionLayout
          color={"bg-lime-500"}
          section={"Public Transport"}
          iconName={"train-outline"}
          percentage={66.66}
          nextScreen={handleNextPage}
          disabled={false}
        >
          <PublicTransportQuestion />
          <Text style={tw`text-red-500 py-2`}>{error}</Text>
        </QuestionLayout>
      </AviodKeyBoardViewWrapper>
    </CustomScrollView>
  );
}

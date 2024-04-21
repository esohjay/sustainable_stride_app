import { useEffect, useState } from "react";
import { Text } from "react-native";
import Question from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";
import { useSurveyActions } from "../../../context/actions/survey_actions";
import tw from "../../../lib/tailwind";

export default function Services() {
  const { surveyData, state } = useSurveyContext();
  const [error, setError] = useState("");
  const { createSurvey } = useSurveyActions();
  const nextScreen = useSurveyNextPage();
  const handleNextPage = () => {
    for (const key in surveyData.servicesConsumption) {
      if (
        (surveyData.servicesConsumption[key].value &&
          !surveyData.servicesConsumption[key].period) ||
        (!surveyData.servicesConsumption[key].value &&
          surveyData.servicesConsumption[key].period)
      ) {
        setError("Ensure amount and period are filled.");
        return;
      } else {
        setError("");
      }
    }
    createSurvey(surveyData);
  };
  useEffect(() => {
    if (state.surveySaved) {
      nextScreen("Estimate");
    }
  }, [state.surveySaved]);
  return (
    <AviodKeyBoardViewWrapper>
      <QuestionLayout
        color={"bg-green-500"}
        section={"Services"}
        iconName={"business-outline"}
        percentage={100}
        nextScreen={handleNextPage}
        disabled={false}
        btnText={state.loading ? "Submitting" : "Submit survey"}
      >
        <Question />
        <Text style={tw`text-red-500 py-2`}>{error}</Text>
      </QuestionLayout>
    </AviodKeyBoardViewWrapper>
  );
}

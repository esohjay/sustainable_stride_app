import { useEffect, useState } from "react";
import { Text } from "react-native";
import Question from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";
import { useSurveyActions } from "../../../context/actions/survey_actions";
import tw from "../../../lib/tailwind";
import { CustomScrollView } from "../../../context/providers/ScrollContext";
import { CREATE_SURVEY_RESET } from "../../../context/constants/survey_constant";

export default function Services() {
  const { state, dispatch } = useSurveyContext();
  const { survey, surveySaved, loading } = state;
  const [error, setError] = useState("");
  const { createSurvey } = useSurveyActions();
  const nextScreen = useSurveyNextPage();
  const handleNextPage = () => {
    for (const key in survey.survey.servicesConsumption) {
      if (
        (survey.survey.servicesConsumption[key].value &&
          !survey.survey.servicesConsumption[key].period) ||
        (!survey.survey.servicesConsumption[key].value &&
          survey.survey.servicesConsumption[key].period)
      ) {
        setError("Ensure amount and period are filled.");
        return;
      } else {
        setError("");
      }
    }
    createSurvey(survey.survey);
  };
  useEffect(() => {
    if (surveySaved) {
      dispatch({ type: CREATE_SURVEY_RESET });
      nextScreen("Estimate");
    }
  }, [surveySaved]);
  return (
    <CustomScrollView style={tw`bg-gray-50`} screen="survey">
      <AviodKeyBoardViewWrapper>
        <QuestionLayout
          color={"bg-green-500"}
          section={"Services"}
          iconName={"business-outline"}
          percentage={100}
          nextScreen={handleNextPage}
          disabled={false}
          btnText={loading ? "Submitting" : "Submit survey"}
        >
          <Question />
          <Text style={tw`text-red-500 py-2`}>{error}</Text>
        </QuestionLayout>
      </AviodKeyBoardViewWrapper>
    </CustomScrollView>
  );
}

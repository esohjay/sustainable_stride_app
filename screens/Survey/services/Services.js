import { useEffect } from "react";
import Question from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";
import { useSurveyActions } from "../../../context/actions/survey_actions";

export default function Services() {
  const { surveyData, state } = useSurveyContext();
  const { createSurvey } = useSurveyActions();
  const nextScreen = useSurveyNextPage();
  useEffect(() => {
    if (state.surveySaved) {
      console.log(state.footprint);
      console.log(state.surveySaved);
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
        nextScreen={() => createSurvey(surveyData)}
        disabled={false}
        btnText="Submit survey"
      >
        <Question />
      </QuestionLayout>
    </AviodKeyBoardViewWrapper>
  );
}

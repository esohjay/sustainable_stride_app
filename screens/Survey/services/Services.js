import Question from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";

export default function Services() {
  const { surveyData } = useSurveyContext();
  const nextScreen = useSurveyNextPage();
  return (
    <AviodKeyBoardViewWrapper>
      <QuestionLayout
        color={"bg-green-500"}
        section={"Services"}
        iconName={"business-outline"}
        percentage={100}
        nextScreen={() => nextScreen("Services")}
        disabled={false}
      >
        <Question />
      </QuestionLayout>
    </AviodKeyBoardViewWrapper>
  );
}

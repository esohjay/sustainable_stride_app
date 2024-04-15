import FlightQuestion from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { CustomScrollView } from "../../../context/providers/ScrollContext";
import tw from "../../../lib/tailwind";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";

export default function Flight() {
  const { surveyData } = useSurveyContext();
  const nextScreen = useSurveyNextPage();
  return (
    <AviodKeyBoardViewWrapper>
      <QuestionLayout
        color={"bg-rose-500"}
        section={"flight"}
        iconName={"airplane-outline"}
        percentage={33.33}
        nextScreen={() => nextScreen("Car")}
        disabled={false}
      >
        <FlightQuestion />
      </QuestionLayout>
    </AviodKeyBoardViewWrapper>
  );
}

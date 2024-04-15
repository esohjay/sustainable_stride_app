import Question from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { CustomScrollView } from "../../../context/providers/ScrollContext";
import tw from "../../../lib/tailwind";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";

export default function Goods() {
  const { surveyData } = useSurveyContext();
  const nextScreen = useSurveyNextPage();
  return (
    <AviodKeyBoardViewWrapper>
      <QuestionLayout
        color={"bg-sky-500"}
        section={"Goods consumption"}
        iconName={"cart-outline"}
        percentage={88.88}
        nextScreen={() => nextScreen("Services")}
        disabled={false}
      >
        <Question />
      </QuestionLayout>
    </AviodKeyBoardViewWrapper>
  );
}

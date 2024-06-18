import Question from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { CustomScrollView } from "../../../context/providers/ScrollContext";
import tw from "../../../lib/tailwind";

export default function Diet() {
  const { state } = useSurveyContext();
  const { survey } = state;
  const nextScreen = useSurveyNextPage();
  return (
    <AviodKeyBoardViewWrapper>
      <QuestionLayout
        color={"bg-fuchsia-500"}
        section={"diet"}
        iconName={"fast-food-outline"}
        percentage={77.77}
        nextScreen={() => nextScreen("Goods")}
        disabled={survey.survey.diet === ""}
      >
        <Question />
      </QuestionLayout>
    </AviodKeyBoardViewWrapper>
  );
}

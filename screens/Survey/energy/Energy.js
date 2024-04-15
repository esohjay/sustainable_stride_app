import EnergyQuestion from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { CustomScrollView } from "../../../context/providers/ScrollContext";
import tw from "../../../lib/tailwind";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";

export default function Energy() {
  const { surveyData } = useSurveyContext();
  const nextScreen = useSurveyNextPage();
  return (
    <AviodKeyBoardViewWrapper>
      <QuestionLayout
        color={"bg-yellow-500"}
        section={"energy"}
        iconName={"flash-outline"}
        percentage={22.22}
        nextScreen={() => nextScreen("Flight")}
        disabled={false}
      >
        <EnergyQuestion />
      </QuestionLayout>
    </AviodKeyBoardViewWrapper>
  );
}

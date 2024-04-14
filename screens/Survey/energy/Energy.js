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
    <CustomScrollView style={tw`bg-gray-50`} screen="survey">
      <AviodKeyBoardViewWrapper>
        <QuestionLayout
          color={"bg-yellow-500"}
          section={"energy"}
          iconName={"flash-outline"}
          percentage={25}
          nextScreen={() => nextScreen("Flight")}
          disabled={
            (surveyData && surveyData.energy.electricity.value === 0) ||
            (surveyData && surveyData.energy.electricity.unit === "")
          }
        >
          <EnergyQuestion />
        </QuestionLayout>
      </AviodKeyBoardViewWrapper>
    </CustomScrollView>
  );
}

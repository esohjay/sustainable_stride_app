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
    <CustomScrollView style={tw`bg-gray-50`} screen="survey">
      <AviodKeyBoardViewWrapper>
        <QuestionLayout
          color={"bg-rose-500"}
          section={"flight"}
          iconName={"airplane-outline"}
          percentage={37.5}
          nextScreen={() => nextScreen("Car")}
          disabled={
            (surveyData && surveyData.energy.electricity.value === 0) ||
            (surveyData && surveyData.energy.electricity.unit === "")
          }
        >
          <FlightQuestion />
        </QuestionLayout>
      </AviodKeyBoardViewWrapper>
    </CustomScrollView>
  );
}

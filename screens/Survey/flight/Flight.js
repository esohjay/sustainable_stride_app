import FlightQuestion from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";
import { CustomScrollView } from "../../../context/providers/ScrollContext";
import tw from "../../../lib/tailwind";

export default function Flight() {
  const nextScreen = useSurveyNextPage();
  return (
    <CustomScrollView style={tw`bg-gray-50 `} screen="survey">
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
    </CustomScrollView>
  );
}

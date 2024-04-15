import Question from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { CustomScrollView } from "../../../context/providers/ScrollContext";
import tw from "../../../lib/tailwind";

export default function Diet() {
  const { surveyData } = useSurveyContext();
  const nextScreen = useSurveyNextPage();
  return (
    <CustomScrollView style={tw`bg-gray-50`} screen="survey">
      <AviodKeyBoardViewWrapper>
        <QuestionLayout
          color={"bg-fuchsia-500"}
          section={"diet"}
          iconName={"fast-food-outline"}
          percentage={77.77}
          nextScreen={() => nextScreen("Goods")}
          disabled={false}
        >
          <Question />
        </QuestionLayout>
      </AviodKeyBoardViewWrapper>
    </CustomScrollView>
  );
}
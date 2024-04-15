import PublicTransportQuestion from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { CustomScrollView } from "../../../context/providers/ScrollContext";
import tw from "../../../lib/tailwind";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";

export default function PublicTransport() {
  const nextScreen = useSurveyNextPage();
  return (
    <CustomScrollView style={tw`bg-gray-50 `} screen="survey">
      <AviodKeyBoardViewWrapper>
        <QuestionLayout
          color={"bg-lime-500"}
          section={"Public Transport"}
          iconName={"train-outline"}
          percentage={66.66}
          nextScreen={() => nextScreen("Diet")}
          disabled={false}
        >
          <PublicTransportQuestion />
        </QuestionLayout>
      </AviodKeyBoardViewWrapper>
    </CustomScrollView>
  );
}

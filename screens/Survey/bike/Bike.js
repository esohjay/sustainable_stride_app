import BikeQuestion from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { CustomScrollView } from "../../../context/providers/ScrollContext";
import tw from "../../../lib/tailwind";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";

export default function Bike() {
  const { surveyData, bikeDetail, bikeList, setBikeDetail } =
    useSurveyContext();
  const nextScreen = useSurveyNextPage();
  const submitBikeQuestion = () => {
    if (
      bikeDetail.period &&
      bikeDetail.value &&
      bikeDetail.size &&
      bikeDetail.unit
    ) {
      addAnswer({
        ...surveyData,
        bike: [...bikeList, bikeDetail],
      });
      setBikeDetail({
        size: "",
        value: "",
        period: "",
        unit: "",
      });
    } else {
      addAnswer({
        ...surveyData,
        bike: [...bikeList],
      });
    }
    nextScreen("PublicTransport");
  };
  return (
    <CustomScrollView style={tw`bg-gray-50`} screen="survey">
      <AviodKeyBoardViewWrapper>
        <QuestionLayout
          color={"bg-violet-500"}
          section={"motorbike"}
          iconName={"bicycle-outline"}
          percentage={50}
          nextScreen={submitBikeQuestion}
          disabled={false}
        >
          <BikeQuestion />
        </QuestionLayout>
      </AviodKeyBoardViewWrapper>
    </CustomScrollView>
  );
}

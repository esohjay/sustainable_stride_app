import CarQuestion from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { CustomScrollView } from "../../../context/providers/ScrollContext";
import tw from "../../../lib/tailwind";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";

export default function Car() {
  const {
    surveyData,
    carDetail,
    carList,
    setCarDetail,
    setCarList,
    addAnswer,
  } = useSurveyContext();
  const nextScreen = useSurveyNextPage();
  const submitCarQuestion = () => {
    if (
      carDetail.fuelType &&
      carDetail.value &&
      carDetail.size &&
      carDetail.unit &&
      carDetail.period
    ) {
      addAnswer({
        ...surveyData,
        car: [...carList, carDetail],
      });
      setCarDetail({
        size: "",
        fuelType: "",
        value: "",
        period: "",
        unit: "",
      });
    } else {
      addAnswer({
        ...surveyData,
        car: [...carList],
      });
    }
    nextScreen("Bike");
  };
  return (
    <CustomScrollView style={tw`bg-gray-50 `} screen="survey">
      <AviodKeyBoardViewWrapper>
        <QuestionLayout
          color={"bg-cyan-500"}
          section={"car"}
          iconName={"car-sport-outline"}
          percentage={50}
          nextScreen={submitCarQuestion}
          disabled={false}
        >
          <CarQuestion />
        </QuestionLayout>
      </AviodKeyBoardViewWrapper>
    </CustomScrollView>
  );
}

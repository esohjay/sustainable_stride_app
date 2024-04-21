import { useState } from "react";
import { Text } from "react-native";
import Question from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { CustomScrollView } from "../../../context/providers/ScrollContext";
import tw from "../../../lib/tailwind";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";

export default function Goods() {
  const [error, setError] = useState("");
  const { surveyData } = useSurveyContext();
  const nextScreen = useSurveyNextPage();
  const handleNextPage = () => {
    for (const key in surveyData.goodsConsumption) {
      if (
        (surveyData.goodsConsumption[key].value &&
          !surveyData.goodsConsumption[key].period) ||
        (!surveyData.goodsConsumption[key].value &&
          surveyData.goodsConsumption[key].period)
      ) {
        setError("Ensure amount and period are filled.");
        return;
      } else {
        setError("");
      }
    }
    nextScreen("Services");
  };
  return (
    <AviodKeyBoardViewWrapper>
      <QuestionLayout
        color={"bg-sky-500"}
        section={"Goods consumption"}
        iconName={"cart-outline"}
        percentage={88.88}
        nextScreen={handleNextPage}
        disabled={false}
      >
        <Question />
        <Text style={tw`text-red-500 py-2`}>{error}</Text>
      </QuestionLayout>
    </AviodKeyBoardViewWrapper>
  );
}

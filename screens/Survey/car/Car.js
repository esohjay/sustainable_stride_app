import { useState } from "react";
import CarQuestion from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { CustomScrollView } from "../../../context/providers/ScrollContext";
import tw from "../../../lib/tailwind";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";
import { useSurveyActions } from "../../../context/actions/survey_actions";
import { generateId } from "../../../lib/helperFn";

export default function Car() {
  const { updateSurvey } = useSurveyActions();
  const [errMsg, setErrMsg] = useState("");
  const { carDetail, setCarDetail, state } = useSurveyContext();
  const { survey } = state;
  const nextScreen = useSurveyNextPage();
  const submitCarQuestion = () => {
    if (
      carDetail.fuelType &&
      carDetail.value &&
      carDetail.size &&
      carDetail.unit &&
      carDetail.period
    ) {
      updateSurvey({
        car: [...survey.survey.car, { ...carDetail, id: generateId() }],
      });
      setCarDetail({
        size: "",
        fuelType: "",
        value: "",
        period: "",
        unit: "",
      });
      setErrMsg("");
      nextScreen("Bike");
    } else if (
      !carDetail.value &&
      !carDetail.fuelType &&
      !carDetail.size &&
      !carDetail.unit &&
      !carDetail.period
    ) {
      setErrMsg("");
      nextScreen("Bike");
    } else {
      setErrMsg("All field must be filled");
      return;
    }
  };
  return (
    <AviodKeyBoardViewWrapper>
      <QuestionLayout
        color={"bg-cyan-500"}
        section={"car"}
        iconName={"car-sport-outline"}
        percentage={44.44}
        nextScreen={submitCarQuestion}
        disabled={false}
      >
        <CarQuestion errMsg={errMsg} setErrMsg={setErrMsg} />
      </QuestionLayout>
    </AviodKeyBoardViewWrapper>
  );
}

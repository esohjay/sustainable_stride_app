import { useState } from "react";
import BikeQuestion from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { CustomScrollView } from "../../../context/providers/ScrollContext";
import tw from "../../../lib/tailwind";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";
import { useSurveyActions } from "../../../context/actions/survey_actions";
import { generateId } from "../../../lib/helperFn";

export default function Bike() {
  const { updateSurvey } = useSurveyActions();
  const [errMsg, setErrMsg] = useState("");
  const { bikeDetail, setBikeDetail, state } = useSurveyContext();
  const { survey } = state;
  const nextScreen = useSurveyNextPage();
  const submitBikeQuestion = () => {
    if (
      bikeDetail.period &&
      bikeDetail.value &&
      bikeDetail.size &&
      bikeDetail.unit
    ) {
      updateSurvey({
        bike: [...survey.survey.bike, { id: generateId(), ...bikeDetail }],
      });
      setBikeDetail({
        size: "",
        value: "",
        period: "",
        unit: "",
      });
      setErrMsg("");
      nextScreen("PublicTransport");
    } else if (
      !bikeDetail.period &&
      !bikeDetail.value &&
      !bikeDetail.size &&
      !bikeDetail.unit
    ) {
      setErrMsg("");
      nextScreen("PublicTransport");
    } else {
      setErrMsg("All field must be filled");
      return;
    }
  };
  return (
    <CustomScrollView style={tw`bg-gray-50`} screen="survey">
      <AviodKeyBoardViewWrapper>
        <QuestionLayout
          color={"bg-violet-500"}
          section={"motorbike"}
          iconName={"bicycle-outline"}
          percentage={55.55}
          nextScreen={submitBikeQuestion}
          disabled={false}
        >
          <BikeQuestion errMsg={errMsg} setErrMsg={setErrMsg} />
        </QuestionLayout>
      </AviodKeyBoardViewWrapper>
    </CustomScrollView>
  );
}

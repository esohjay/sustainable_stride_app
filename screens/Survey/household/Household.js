import Question from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";

export default function Household() {
  const { surveyData } = useSurveyContext();
  return (
    <QuestionLayout
      color={"bg-blue-500"}
      section={"household"}
      iconName={"home-outline"}
      percentage={12.5}
      nextScreen={"Energy"}
      disabled={surveyData && surveyData.householdSize === ""}
    >
      <Question />
    </QuestionLayout>
  );
}

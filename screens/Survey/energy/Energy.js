import Question from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";

export default function Energy() {
  const { surveyData } = useSurveyContext();
  return (
    <QuestionLayout
      color={"bg-yellow-500"}
      section={"energy"}
      iconName={"flash-outline"}
      percentage={25}
      nextScreen={"N"}
      disabled={surveyData && surveyData.energy.electricity.value === 0}
    >
      <Question />
    </QuestionLayout>
  );
}

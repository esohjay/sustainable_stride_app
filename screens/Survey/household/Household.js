import Question from "./Question";
import QuestionLayout from "../../../components/QuestionLayout";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import useSurveyNextPage from "../../../lib/useSurveyNextPage";

export default function Household() {
  const { surveyData } = useSurveyContext();
  const nextScreen = useSurveyNextPage();
  return (
    <QuestionLayout
      color={"bg-blue-500"}
      section={"household"}
      iconName={"home-outline"}
      percentage={12.5}
      nextScreen={() => nextScreen("Energy")}
      disabled={surveyData && surveyData.householdSize === ""}
    >
      <Question />
    </QuestionLayout>
  );
}

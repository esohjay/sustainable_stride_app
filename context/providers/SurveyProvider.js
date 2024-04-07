import React, { useContext, createContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";

const SurveyContext = createContext();

const SurveyProvider = ({ children }) => {
  const [surveyIndex, setSurveyIndex] = useState(0);
  const [surveySection, setSurveySection] = useState("household");
  const [surveyData, setSurveyData] = useState({
    householdSize: "",
    energy: {
      electricity: {
        value: 0,
        unit: "",
      },
      gas: {
        value: 0,
        unit: "",
      },
    },
  });
  const addAnswer = (answer) => {
    setSurveyData({ ...surveyData, ...answer });
  };

  return (
    <SurveyContext.Provider
      value={{
        surveyIndex,
        setSurveyIndex,
        setSurveySection,
        surveySection,
        surveyData,
        addAnswer,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurveyContext = () => {
  return useContext(SurveyContext);
};

export { SurveyContext, SurveyProvider };

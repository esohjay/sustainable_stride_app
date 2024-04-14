import React, { useContext, createContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";

const SurveyContext = createContext();

const SurveyProvider = ({ children }) => {
  const [surveyIndex, setSurveyIndex] = useState(0);
  const [surveySection, setSurveySection] = useState("household");
  const [carList, setCarList] = useState([]);
  const [carDetail, setCarDetail] = useState({
    size: "",
    fuelType: "",
    value: "",
    unit: "",
    period: "",
  });
  const [bikeList, setBikeList] = useState([]);
  const [bikeDetail, setBikeDetail] = useState({
    size: "",
    period: "",
    value: "",
    unit: "",
  });
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
      coal: {
        value: 0,
        unit: "",
      },
      lpg: {
        value: 0,
        unit: "",
      },
      propane: {
        value: 0,
        unit: "",
      },
      wood: {
        value: 0,
        unit: "",
      },
    },
    flight: {
      withRf: {
        domestic: 0,
        shortHaul: 0,
        longHaul: 0,
      },
      withoutRf: {
        domestic: 0,
        shortHaul: 0,
        longHaul: 0,
      },
    },
    car: [],
    bike: [],
    publicTransport: {
      bus: {
        value: 0,
        unit: "",
        period: "",
      },
      train: {
        value: 0,
        unit: "",
        period: "",
      },
      coach: {
        value: 0,
        unit: "",
        period: "",
      },
    },
  });
  const addAnswer = (answer) => {
    setSurveyData({ ...surveyData, ...answer });
  };

  return (
    <SurveyContext.Provider
      value={{
        surveyData,
        addAnswer,
        carDetail,
        carList,
        setCarDetail,
        setCarList,
        bikeList,
        setBikeList,
        setBikeDetail,
        bikeDetail,
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

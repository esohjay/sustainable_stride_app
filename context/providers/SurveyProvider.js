import React, { useContext, createContext, useState, useReducer } from "react";
import { SurveyReducer } from "../reducers/survey_reducer";

const SurveyContext = createContext();
export const surveyInitialData = {
  totalEmission: 0,
  emissionCategory: {
    home: 0,
    shopping: 0,
    diet: 0,
    travel: 0,
  },
  survey: {
    householdSize: 0,
    energy: {
      electricity: {
        value: "",
        unit: "",
      },
      gas: {
        value: "",
        unit: "",
      },
      coal: {
        value: "",
        unit: "",
      },
      lpg: {
        value: "",
        unit: "",
      },
      propane: {
        value: "",
        unit: "",
      },
      wood: {
        value: "",
        unit: "",
      },
    },
    flight: {
      domestic: "",
      shortHaul: "",
      longHaul: "",
    },
    car: [],
    bike: [],
    publicTransport: {
      bus: {
        value: "",
        unit: "",
        period: "",
      },
      train: {
        value: "",
        unit: "",
        period: "",
      },
      coach: {
        value: "",
        unit: "",
        period: "",
      },
    },
    diet: "",
    goodsConsumption: {
      clothingMaterials: { value: "", period: "" },
      shoesAndFootwear: { value: "", period: "" },
      furniture: { value: "", period: "" },
      pharmaceuticalProducts: { value: "", period: "" },
      booksAndNewspapers: { value: "", period: "" },
      petFood: { value: "", period: "" },
      tobacco: { value: "", period: "" },
      alcohol: { value: "", period: "" },
      gamesOrToyOrHobbies: { value: "", period: "" },
      householdAppliances: { value: "", period: "" },
    },
    servicesConsumption: {
      medicalServices: { value: "", period: "" },
      education: { value: "", period: "" },
      veterinaryServices: { value: "", period: "" },
      financialServices: { value: "", period: "" },
      saloonAndGrooming: { value: "", period: "" },
    },
  },
};
const initialState = {
  loading: false,
  success: false,
  surveySaved: false,
  error: null,
  footprint: null,
  surveyUpdated: false,
  survey: surveyInitialData,
  fetchingSurvey: false,
};

const SurveyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SurveyReducer, initialState);
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
    householdSize: 0,
    energy: {
      electricity: {
        value: "",
        unit: "",
      },
      gas: {
        value: "",
        unit: "",
      },
      coal: {
        value: "",
        unit: "",
      },
      lpg: {
        value: "",
        unit: "",
      },
      propane: {
        value: "",
        unit: "",
      },
      wood: {
        value: "",
        unit: "",
      },
    },
    flight: {
      domestic: "",
      shortHaul: "",
      longHaul: "",
    },
    car: [],
    bike: [],
    publicTransport: {
      bus: {
        value: "",
        unit: "",
        period: "",
      },
      train: {
        value: "",
        unit: "",
        period: "",
      },
      coach: {
        value: "",
        unit: "",
        period: "",
      },
    },
    diet: "",
    goodsConsumption: {
      clothingMaterials: { value: "", period: "" },
      shoesAndFootwear: { value: "", period: "" },
      furniture: { value: "", period: "" },
      pharmaceuticalProducts: { value: "", period: "" },
      booksAndNewspapers: { value: "", period: "" },
      petFood: { value: "", period: "" },
      tobacco: { value: "", period: "" },
      alcohol: { value: "", period: "" },
      gamesOrToyOrHobbies: { value: "", period: "" },
      householdAppliances: { value: "", period: "" },
    },
    servicesConsumption: {
      medicalServices: { value: "", period: "" },
      education: { value: "", period: "" },
      veterinaryServices: { value: "", period: "" },
      financialServices: { value: "", period: "" },
      saloonAndGrooming: { value: "", period: "" },
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
        state,
        dispatch,
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

import React, { useContext, createContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";

const SurveyContext = createContext();

const SurveyProvider = ({ children }) => {
  const [surveyIndex, setSurveyIndex] = useState("");
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
      withRf: {
        domestic: "",
        shortHaul: "",
        longHaul: "",
      },
      withoutRf: {
        domestic: "",
        shortHaul: "",
        longHaul: "",
      },
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

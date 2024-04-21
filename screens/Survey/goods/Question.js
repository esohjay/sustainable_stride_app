import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import { TextInput } from "../../../components/UI/TextInput";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { DropdownSelect } from "../../../components/Dropdown";
import QuestionField from "./QuestionField";

export default function GoodsQuestion() {
  const { addAnswer, surveyData } = useSurveyContext();
  const setPeriod = (field, period) => {
    addAnswer({
      goodsConsumption: {
        ...surveyData.goodsConsumption,
        [field]: {
          ...surveyData.goodsConsumption[field],
          period,
        },
      },
    });
  };
  const setValue = (field, value) => {
    addAnswer({
      goodsConsumption: {
        ...surveyData.goodsConsumption,
        [field]: {
          ...surveyData.goodsConsumption[field],
          value,
        },
      },
    });
  };

  return (
    <View>
      <Text style={tw`font-semibold text-lg mb-3 py-2 text-mainColor`}>
        How much do you/your household spend on average on each of the following
        goods over a month/year?
      </Text>
      <View style={tw`flex gap-y-3`}>
        {/* clothingMaterials */}
        <QuestionField
          label={"Clothing and textile (£)"}
          field={"clothingMaterials"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={
            surveyData?.goodsConsumption?.clothingMaterials?.period
          }
        />
        {/* shoesAndFootwear */}
        <QuestionField
          label={"Shoes and footwears (£)"}
          field={"shoesAndFootwear"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={surveyData?.goodsConsumption?.shoesAndFootwear?.period}
        />

        {/* furniture */}
        <QuestionField
          label={"Furniture (£)"}
          field={"furniture"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={surveyData?.goodsConsumption?.furniture?.period}
        />
        {/* Pharmacy */}
        <QuestionField
          label={"Pharmaceutical Products (£)"}
          field={"pharmaceuticalProducts"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={
            surveyData?.goodsConsumption?.pharmaceuticalProducts?.period
          }
        />
        {/* booksAndNewspapers */}
        <QuestionField
          label={"Books and Newspapers (£)"}
          field={"booksAndNewspapers"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={
            surveyData?.goodsConsumption?.booksAndNewspapers?.period
          }
        />

        {/* Petfood */}
        <QuestionField
          label={"Pets Food (£)"}
          field={"petFood"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={surveyData?.goodsConsumption?.petFood?.period}
        />
        {/* Tobacco */}
        <QuestionField
          label={"Tobacco (£)"}
          field={"tobacco"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={surveyData?.goodsConsumption?.tobacco?.period}
        />
        {/* alcohol */}
        <QuestionField
          label={"Alcohol (£)"}
          field={"alcohol"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={surveyData?.goodsConsumption?.alcohol?.period}
        />
        {/* games */}
        <QuestionField
          label={"Games and Hobbies (£)"}
          field={"gamesOrToyOrHobbies"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={
            surveyData?.goodsConsumption?.gamesOrToyOrHobbies?.period
          }
        />
        {/* games */}
        <QuestionField
          label={"Household Appliances (£)"}
          field={"householdAppliances"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={
            surveyData?.goodsConsumption?.householdAppliances?.period
          }
        />
      </View>
    </View>
  );
}

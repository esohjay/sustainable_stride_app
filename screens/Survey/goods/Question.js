import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import { TextInput } from "../../../components/UI/TextInput";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { DropdownSelect } from "../../../components/Dropdown";
import QuestionField from "./QuestionField";
import { useSurveyActions } from "../../../context/actions/survey_actions";

export default function GoodsQuestion() {
  const { addAnswer, surveyData, state } = useSurveyContext();
  const { survey } = state;
  const { updateSurvey } = useSurveyActions();
  const setPeriod = (field, period) => {
    updateSurvey({
      goodsConsumption: {
        ...survey.survey.goodsConsumption,
        [field]: {
          ...survey.survey.goodsConsumption[field],
          period,
        },
      },
    });
  };
  const setValue = (field, value) => {
    updateSurvey({
      goodsConsumption: {
        ...survey.survey.goodsConsumption,
        [field]: {
          ...survey.survey.goodsConsumption[field],
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
            survey.survey?.goodsConsumption?.clothingMaterials?.period
          }
          inputValue={survey.survey?.goodsConsumption?.clothingMaterials?.value}
        />
        {/* shoesAndFootwear */}
        <QuestionField
          label={"Shoes and footwears (£)"}
          field={"shoesAndFootwear"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={
            survey.survey?.goodsConsumption?.shoesAndFootwear?.period
          }
          inputValue={survey.survey?.goodsConsumption?.shoesAndFootwear?.value}
        />

        {/* furniture */}
        <QuestionField
          label={"Furniture (£)"}
          field={"furniture"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={survey.survey?.goodsConsumption?.furniture?.period}
          inputValue={survey.survey?.goodsConsumption?.furniture?.value}
        />
        {/* Pharmacy */}
        <QuestionField
          label={"Pharmaceutical Products (£)"}
          field={"pharmaceuticalProducts"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={
            survey.survey?.goodsConsumption?.pharmaceuticalProducts?.period
          }
          inputValue={
            survey.survey?.goodsConsumption?.pharmaceuticalProducts?.value
          }
        />
        {/* booksAndNewspapers */}
        <QuestionField
          label={"Books and Newspapers (£)"}
          field={"booksAndNewspapers"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={
            survey.survey?.goodsConsumption?.booksAndNewspapers?.period
          }
          inputValue={
            survey.survey?.goodsConsumption?.booksAndNewspapers?.value
          }
        />

        {/* Petfood */}
        <QuestionField
          label={"Pets Food (£)"}
          field={"petFood"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={survey.survey?.goodsConsumption?.petFood?.period}
          inputValue={survey.survey?.goodsConsumption?.petFood?.value}
        />
        {/* Tobacco */}
        <QuestionField
          label={"Tobacco (£)"}
          field={"tobacco"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={survey.survey?.goodsConsumption?.tobacco?.period}
          inputValue={survey.survey?.goodsConsumption?.tobacco?.value}
        />
        {/* alcohol */}
        <QuestionField
          label={"Alcohol (£)"}
          field={"alcohol"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={survey.survey?.goodsConsumption?.alcohol?.period}
          inputValue={survey.survey?.goodsConsumption?.alcohol?.value}
        />
        {/* games */}
        <QuestionField
          label={"Games and Hobbies (£)"}
          field={"gamesOrToyOrHobbies"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={
            survey.survey?.goodsConsumption?.gamesOrToyOrHobbies?.period
          }
          inputValue={
            survey.survey?.goodsConsumption?.gamesOrToyOrHobbies?.value
          }
        />
        {/* games */}
        <QuestionField
          label={"Household Appliances (£)"}
          field={"householdAppliances"}
          setPeriod={setPeriod}
          setValue={setValue}
          dropdownValue={
            survey.survey?.goodsConsumption?.householdAppliances?.period
          }
          inputValue={
            survey.survey?.goodsConsumption?.householdAppliances?.value
          }
        />
      </View>
    </View>
  );
}

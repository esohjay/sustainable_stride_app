import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { Button } from "../../../components/UI/Button";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import { Ionicons } from "@expo/vector-icons";
import BikeQuestionForm from "../../../components/BikeQuestionForm";
import { useSurveyActions } from "../../../context/actions/survey_actions";
import { generateId } from "../../../lib/helperFn";

export default function BikeQuestion({ errMsg, setErrMsg }) {
  const { updateSurvey } = useSurveyActions();
  const { bikeDetail, setBikeDetail, state } = useSurveyContext();
  const { survey } = state;

  const setSize = (size) => {
    setBikeDetail({ ...bikeDetail, size });
  };
  const setPeriod = (period) => {
    setBikeDetail({ ...bikeDetail, period });
  };
  const setValue = (value) => {
    setBikeDetail({ ...bikeDetail, value });
  };
  const setUnit = (unit) => {
    setBikeDetail({ ...bikeDetail, unit });
  };
  const addBikeList = () => {
    if (
      bikeDetail.period &&
      bikeDetail.size &&
      bikeDetail.value &&
      bikeDetail.unit
    ) {
      updateSurvey({
        bike: [...survey.survey.bike, { id: generateId(), ...bikeDetail }],
      });
      setBikeDetail({
        size: "",
        period: "",
        value: "",
        unit: "",
      });
      setErrMsg("");
    } else {
      setErrMsg("All field must be filled");
      return;
    }
  };
  const removeFromList = (id) => {
    const bikeList = survey.survey.bike.filter((bike) => bike.id !== id);
    updateSurvey({ bike: [...bikeList] });
  };
  // console.log(survey.survey.bike);
  return (
    <View>
      <Text style={tw`font-semibold text-lg mb-3 text-mainColor`}>
        Describe your motorbike yealy usage
      </Text>
      <View style={tw`flex gap-y-3 py-4 mb-3`}>
        {survey.survey.bike.map((bike, i) => (
          <View
            key={i}
            style={tw`flex gap-y-1 flex-row justify-between items-center gap-x-2   `}
          >
            <View>
              <Text style={tw`font-semibold text-sm capitalize`}>
                {bike.size} size bike
              </Text>
              <Text style={tw`font-medium text-xs`}>
                {bike.value}
                {bike.unit} {bike.period}
              </Text>
            </View>
            <Pressable style={tw``} onPress={() => removeFromList(bike.id)}>
              <Ionicons name="trash" size={12} color="red" />
            </Pressable>
          </View>
          // <View key={i} style={tw`flex gap-x-1 flex-row items-center pb-2`}>
          //   <Ionicons
          //     name="chevron-forward-outline"
          //     size={16}
          //     color="#7d4f50"
          //   />

          //   <Text style={tw`font-medium text-sm capitalize`}>
          //     {bike.size} size motorbike - {bike.value}
          //     {bike.unit} {bike.period}
          //   </Text>
          // </View>
        ))}

        <BikeQuestionForm
          setPeriod={setPeriod}
          setSize={setSize}
          setUnit={setUnit}
          setValue={setValue}
          value={bikeDetail.value}
          period={bikeDetail.period}
          unit={bikeDetail.unit}
          size={bikeDetail.size}
          allowPeriod={true}
        />
        <View style={tw`w-full flex flex-row justify-end py-4`}>
          <View style={tw` w-1/2`}>
            <Button
              onPress={addBikeList}
              style={tw`text-[9px]`}
              height="33"
              text={"Add another"}
              icon={"add-circle-outline"}
            />
          </View>
        </View>
        <Text style={tw`text-red-500 py-2 `}>{errMsg}</Text>
      </View>
    </View>
  );
}

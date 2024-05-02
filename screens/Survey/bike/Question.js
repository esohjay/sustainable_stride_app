import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { Button } from "../../../components/UI/Button";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import { TextInput } from "../../../components/UI/TextInput";
import { Ionicons } from "@expo/vector-icons";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { DropdownSelect } from "../../../components/Dropdown";
import BikeQuestionForm from "../../../components/BikeQuestionForm";

export default function BikeQuestion() {
  const [errMsg, setErrMsg] = useState("");
  const { bikeDetail, bikeList, setBikeDetail, setBikeList, surveyData } =
    useSurveyContext();
  console.log(surveyData);
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
      setBikeList([...bikeList, bikeDetail]);
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
  console.log(bikeDetail, bikeList);
  return (
    <View>
      <Text style={tw`font-semibold text-lg mb-3 text-mainColor`}>
        Describe your motorbike yealy usage
      </Text>
      <View style={tw`flex gap-y-3 py-4 mb-3`}>
        {bikeList.map((bike, i) => (
          <View key={i} style={tw`flex gap-x-1 flex-row items-center pb-2`}>
            <Ionicons
              name="chevron-forward-outline"
              size={16}
              color="#7d4f50"
            />

            <Text style={tw`font-medium text-sm capitalize`}>
              {bike.size} size motorbike - {bike.value}
              {bike.unit} {bike.period}
            </Text>
          </View>
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

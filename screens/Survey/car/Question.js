import React, { useState } from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import { Button } from "../../../components/UI/Button";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import { TextInput } from "../../../components/UI/TextInput";
import { Ionicons } from "@expo/vector-icons";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { DropdownSelect } from "../../../components/Dropdown";
import CarQuestionForm from "../../../components/CarQuestionForm";

export default function CarQuestion() {
  const [errMsg, setErrMsg] = useState("");
  const { surveyData, carDetail, carList, setCarDetail, setCarList } =
    useSurveyContext();
  console.log(surveyData);
  const setSize = (size) => {
    setCarDetail({ ...carDetail, size });
  };
  const setPeriod = (period) => {
    setCarDetail({ ...carDetail, period });
  };
  const setFuelType = (fuelType) => {
    setCarDetail({ ...carDetail, fuelType });
  };
  const setValue = (value) => {
    setCarDetail({ ...carDetail, value });
  };
  const setUnit = (unit) => {
    setCarDetail({ ...carDetail, unit });
  };
  const addCarList = () => {
    if (
      carDetail.fuelType &&
      carDetail.size &&
      carDetail.value &&
      carDetail.unit &&
      carDetail.period
    ) {
      setCarList([...carList, carDetail]);
      setCarDetail({
        size: "",
        fuelType: "",
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
  console.log(carDetail, carList);
  return (
    <AviodKeyBoardViewWrapper>
      <View>
        <Text style={tw`font-semibold text-lg mb-3 text-mainColor`}>
          Describe your car yealy usage
        </Text>
        <View style={tw`flex gap-y-3 py-4 mb-3`}>
          {carList.map((car, i) => (
            <View key={i} style={tw`flex gap-x-1 flex-row items-center pb-2`}>
              <Ionicons
                name="chevron-forward-outline"
                size={16}
                color="#7d4f50"
              />
              <Text style={tw`font-medium text-sm capitalize`}>
                {car.size} size car - {car.fuelType} - {car.value}
                {car.unit} {car.period}
              </Text>
            </View>
          ))}
          <CarQuestionForm
            setFuelType={setFuelType}
            setPeriod={setPeriod}
            setSize={setSize}
            setUnit={setUnit}
            setValue={setValue}
            value={carDetail.value}
            period={carDetail.period}
            unit={carDetail.unit}
            fuelType={carDetail.fuelType}
            size={carDetail.size}
            allowPeriod={true}
          />

          <View style={tw`w-full flex flex-row justify-end py-4`}>
            <View style={tw` w-1/2`}>
              <Button
                onPress={addCarList}
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
    </AviodKeyBoardViewWrapper>
  );
}

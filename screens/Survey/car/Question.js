import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { Button } from "../../../components/UI/Button";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import { TextInput } from "../../../components/UI/TextInput";
import { Ionicons } from "@expo/vector-icons";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { DropdownSelect } from "../../../components/Dropdown";
import CarQuestionForm from "../../../components/CarQuestionForm";
import { useSurveyActions } from "../../../context/actions/survey_actions";
import { generateId } from "../../../lib/helperFn";

export default function CarQuestion({ errMsg, setErrMsg }) {
  const { updateSurvey } = useSurveyActions();
  const { state, carDetail, setCarDetail } = useSurveyContext();
  const { survey } = state;
  const removeFromList = (id) => {
    const carList = survey.survey.car.filter((car) => car.id !== id);
    updateSurvey({ car: [...carList] });
  };
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
      updateSurvey({
        car: [...survey.survey.car, { ...carDetail, id: generateId() }],
      });
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
  return (
    <AviodKeyBoardViewWrapper>
      <View>
        <Text style={tw`font-semibold text-lg mb-3 text-mainColor`}>
          Describe your car yealy usage
        </Text>
        <View style={tw`flex gap-y-3 py-4 mb-5`}>
          {survey.survey.car.map((car, i) => (
            <View
              key={i}
              style={tw`flex gap-y-1 flex-row justify-between items-center gap-x-2   `}
            >
              <View>
                <Text style={tw`font-semibold text-sm capitalize`}>
                  {car.size} size car ({car.fuelType})
                </Text>
                <Text style={tw`font-medium text-xs`}>
                  {car.value}
                  {car.unit} {car.period}
                </Text>
              </View>
              <Pressable style={tw``} onPress={() => removeFromList(car.id)}>
                <Ionicons name="trash" size={12} color="red" />
              </Pressable>
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

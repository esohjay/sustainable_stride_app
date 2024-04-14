import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { Button } from "../../../components/UI/Button";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import { TextInput } from "../../../components/UI/TextInput";
import { Ionicons } from "@expo/vector-icons";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { DropdownSelect } from "../../../components/Dropdown";

export default function CarQuestion() {
  const {
    addAnswer,
    surveyData,
    carDetail,
    carList,
    setCarDetail,
    setCarList,
  } = useSurveyContext();
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
    }
    return;
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
            <Text key={i} style={tw`font-medium text-base capitalize`}>
              {car.size} size car - {car.fuelType} - {car.value}
              {car.unit} {car.period}
            </Text>
          ))}
          <View style={tw`flex flex-row gap-x-2`}>
            <View style={tw`w-1/3`}>
              <Text style={tw`font-semibold mb-2 text-dark`}>Car size</Text>
              <DropdownSelect
                options={[
                  { label: "Small", value: "small" },
                  { label: "Medium", value: "medium" },
                  { label: "Large", value: "large" },
                  { label: "Average", value: "average" },
                ]}
                onSelect={setSize}
                value={carDetail.size}
                placeholder="Select"
              />
            </View>
            <View style={tw`w-1/2`}>
              <Text style={tw`font-semibold mb-2 text-dark`}>Fuel type</Text>
              <DropdownSelect
                options={[
                  { label: "Diesel", value: "diesel" },
                  { label: "Petrol", value: "Petrol" },
                  { label: "Hybrid", value: "hybrid" },
                  { label: "CNG", value: "cng" },
                  { label: "LPG", value: "lpg" },
                  { label: "Plugin Hybrid", value: "pluginHybrid" },
                  { label: "Battery Hybrid", value: "batteryHybrid" },
                  { label: "Unknown", value: "unknown" },
                ]}
                onSelect={setFuelType}
                value={carDetail.fuelType}
                placeholder="Select"
              />
            </View>
          </View>
          <View>
            <Text style={tw`font-semibold mb-2 text-dark`}>
              Distance travelled
            </Text>
            <View style={tw`flex flex-row items-end gap-x-3`}>
              <View style={tw`w-1/3`}>
                <TextInput
                  onChangeText={(text) => setValue(text)}
                  keyboardType="number-pad"
                  placeholder="0"
                  // label={"Distance travelled"}
                  border={true}
                  value={carDetail.value}
                />
              </View>

              <View style={tw`w-1/4`}>
                <DropdownSelect
                  options={[
                    { label: "km", value: "km" },
                    { label: "mile", value: "mile" },
                  ]}
                  onSelect={setUnit}
                  value={carDetail.unit}
                />
              </View>
              <View style={tw`w-1/3`}>
                <DropdownSelect
                  options={[
                    { label: "Monthly", value: "monthly" },
                    { label: "Yearly", value: "yearly" },
                  ]}
                  onSelect={setPeriod}
                  value={carDetail.period}
                  placeholder="Period"
                />
              </View>
            </View>
          </View>
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
        </View>
      </View>
    </AviodKeyBoardViewWrapper>
  );
}

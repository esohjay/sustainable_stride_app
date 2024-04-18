import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { Button } from "../../../components/UI/Button";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import { TextInput } from "../../../components/UI/TextInput";
import { Ionicons } from "@expo/vector-icons";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { DropdownSelect } from "../../../components/Dropdown";

export default function BikeQuestion() {
  const [errMsg, setErrMsg] = useState("");
  const { surveyData, bikeDetail, bikeList, setBikeDetail, setBikeList } =
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
    } else {
      setErrMsg("All field must be filled");
    }
    return;
  };
  console.log(bikeDetail, bikeList);
  return (
    <AviodKeyBoardViewWrapper>
      <View>
        <Text style={tw`font-semibold text-lg mb-3 text-mainColor`}>
          Describe your motorbike yealy usage
        </Text>
        <View style={tw`flex gap-y-3 py-4 mb-3`}>
          {bikeList.map((bike, i) => (
            <Text key={i} style={tw`font-medium text-base capitalize`}>
              {bike.size} size motorbike - {bike.value}
              {bike.unit} {bike.period}
            </Text>
          ))}
          <View style={tw`flex`}>
            <View style={tw`w-2/3`}>
              <Text style={tw`font-semibold mb-2 text-dark`}>
                Motorbike size
              </Text>
              <DropdownSelect
                options={[
                  { label: "Small", value: "small" },
                  { label: "Medium", value: "medium" },
                  { label: "Large", value: "large" },
                  { label: "Average", value: "average" },
                ]}
                onSelect={setSize}
                value={bikeDetail.size}
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
                  value={bikeDetail.value}
                />
              </View>
              <View style={tw`w-1/4`}>
                <DropdownSelect
                  options={[
                    { label: "Km", value: "km" },
                    { label: "Mile", value: "mile" },
                  ]}
                  onSelect={setUnit}
                  value={bikeDetail.unit}
                />
              </View>
              <View style={tw`w-1/3`}>
                <DropdownSelect
                  options={[
                    { label: "Monthly", value: "monthly" },
                    { label: "Yearly", value: "yearly" },
                  ]}
                  onSelect={setPeriod}
                  value={bikeDetail.period}
                  placeholder="Period"
                />
              </View>
            </View>
          </View>
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
    </AviodKeyBoardViewWrapper>
  );
}

import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { Button } from "../../../components/UI/Button";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import { TextInput } from "../../../components/UI/TextInput";
import { useForm, Controller } from "react-hook-form";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { DropdownSelect } from "../../../components/Dropdown";

export default function EnergyQuestion() {
  const { addAnswer, surveyData } = useSurveyContext();
  console.log(surveyData);
  const electricityUnit = (unit) => {
    addAnswer({
      ...surveyData,
      energy: {
        ...surveyData.energy,
        electricity: {
          ...surveyData.energy.electricity,
          unit,
        },
      },
    });
  };
  const gasUnit = (unit) => {
    addAnswer({
      ...surveyData,
      energy: {
        ...surveyData.energy,
        gas: {
          ...surveyData.energy.gas,
          unit,
        },
      },
    });
  };
  const coalUnit = (unit) => {
    addAnswer({
      ...surveyData,
      energy: {
        ...surveyData.energy,
        coal: {
          ...surveyData.energy.coal,
          unit,
        },
      },
    });
  };
  const propaneUnit = (unit) => {
    addAnswer({
      ...surveyData,
      energy: {
        ...surveyData.energy,
        propane: {
          ...surveyData.energy.propane,
          unit,
        },
      },
    });
  };
  const lpgUnit = (unit) => {
    addAnswer({
      ...surveyData,
      energy: {
        ...surveyData.energy,
        lpg: {
          ...surveyData.energy.lpg,
          unit,
        },
      },
    });
  };
  const woodUnit = (unit) => {
    addAnswer({
      ...surveyData,
      energy: {
        ...surveyData.energy,
        wood: {
          ...surveyData.energy.wood,
          unit,
        },
      },
    });
  };
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <AviodKeyBoardViewWrapper>
      <View>
        <Text style={tw`font-semibold text-lg mb-3 text-mainColor`}>
          Enter your consumption of each of the following
        </Text>
        <View style={tw`flex gap-y-3`}>
          {/* Electricity */}
          <View style={tw`flex flex-row items-end gap-x-3`}>
            <View style={tw`w-1/2`}>
              <TextInput
                onChangeText={(text) =>
                  addAnswer({
                    ...surveyData,
                    energy: {
                      ...surveyData.energy,
                      electricity: {
                        ...surveyData.energy.electricity,
                        value: text,
                      },
                    },
                  })
                }
                keyboardType="numeric"
                placeholder="0"
                label={"Electricity"}
                border={true}
              />
            </View>

            <View style={tw`w-1/3`}>
              <DropdownSelect
                options={[{ label: "kWh", value: "kWh" }]}
                onSelect={electricityUnit}
                value={surveyData?.energy?.electricity?.unit}
              />
            </View>
          </View>
          {/* Gas */}
          <View style={tw`flex flex-row items-end gap-x-3`}>
            <View style={tw`w-1/2`}>
              <TextInput
                onChangeText={(text) =>
                  addAnswer({
                    ...surveyData,
                    energy: {
                      ...surveyData.energy,
                      gas: {
                        ...surveyData.energy.gas,
                        value: text,
                      },
                    },
                  })
                }
                keyboardType="numeric"
                placeholder="110"
                label={"Gas"}
                border={true}
              />
            </View>

            <View style={tw`w-1/3`}>
              <DropdownSelect
                options={[
                  { label: "kWh", value: "kWh" },
                  { label: "Cubic meter", value: "cubicMeter" },
                  { label: "Tonne", value: "tonne" },
                ]}
                onSelect={gasUnit}
                value={surveyData?.energy?.gas?.unit}
              />
            </View>
          </View>
          {/* Coal */}
          <View style={tw`flex flex-row items-end gap-x-3`}>
            <View style={tw`w-1/2`}>
              <TextInput
                onChangeText={(text) =>
                  addAnswer({
                    ...surveyData,
                    energy: {
                      ...surveyData.energy,
                      coal: {
                        ...surveyData.energy.coal,
                        value: text,
                      },
                    },
                  })
                }
                keyboardType="numeric"
                placeholder="20"
                label={"Coal"}
                border={true}
              />
            </View>

            <View style={tw`w-1/3`}>
              <DropdownSelect
                options={[
                  { label: "kWh", value: "kWh" },
                  { label: "Tonne", value: "tonne" },
                ]}
                onSelect={coalUnit}
                value={surveyData?.energy?.coal?.unit}
              />
            </View>
          </View>
          {/* Lpg */}
          <View style={tw`flex flex-row items-end gap-x-3`}>
            <View style={tw`w-1/2`}>
              <TextInput
                onChangeText={(text) =>
                  addAnswer({
                    ...surveyData,
                    energy: {
                      ...surveyData.energy,
                      lpg: {
                        ...surveyData.energy.lpg,
                        value: text,
                      },
                    },
                  })
                }
                keyboardType="numeric"
                placeholder="20"
                label={"LPG"}
                border={true}
              />
            </View>

            <View style={tw`w-1/3`}>
              <DropdownSelect
                options={[
                  { label: "Litre", value: "litre" },
                  { label: "Tonne", value: "tonne" },
                ]}
                onSelect={lpgUnit}
                value={surveyData?.energy?.lpg?.unit}
              />
            </View>
          </View>
          {/* Propane */}
          <View style={tw`flex flex-row items-end gap-x-3`}>
            <View style={tw`w-1/2`}>
              <TextInput
                onChangeText={(text) =>
                  addAnswer({
                    ...surveyData,
                    energy: {
                      ...surveyData.energy,
                      propane: {
                        ...surveyData.energy.propane,
                        value: text,
                      },
                    },
                  })
                }
                keyboardType="numeric"
                placeholder="80"
                label={"Propane"}
                border={true}
              />
            </View>

            <View style={tw`w-1/3`}>
              <DropdownSelect
                options={[
                  { label: "Litre", value: "litre" },
                  { label: "Tonne", value: "tonne" },
                  { label: "kWh", value: "kWh" },
                ]}
                onSelect={propaneUnit}
                value={surveyData?.energy?.propane?.unit}
              />
            </View>
          </View>
          {/* Wood */}
          <View style={tw`flex flex-row items-end gap-x-3`}>
            <View style={tw`w-1/2`}>
              <TextInput
                onChangeText={(text) =>
                  addAnswer({
                    ...surveyData,
                    energy: {
                      ...surveyData.energy,
                      wood: {
                        ...surveyData.energy.wood,
                        value: text,
                      },
                    },
                  })
                }
                keyboardType="numeric"
                placeholder="80"
                label={"Wood"}
                border={true}
              />
            </View>

            <View style={tw`w-1/3`}>
              <DropdownSelect
                options={[
                  { label: "Tonne", value: "tonne" },
                  { label: "kWh", value: "kWh" },
                ]}
                onSelect={woodUnit}
                value={surveyData?.energy?.wood?.unit}
              />
            </View>
          </View>
        </View>
      </View>
    </AviodKeyBoardViewWrapper>
  );
}

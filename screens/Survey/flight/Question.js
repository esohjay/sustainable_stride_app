import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { Button } from "../../../components/UI/Button";
import { useSurveyContext } from "../../../context/providers/SurveyProvider";
import { TextInput } from "../../../components/UI/TextInput";
import { useForm, Controller } from "react-hook-form";
import AviodKeyBoardViewWrapper from "../../../components/AviodKeyBoardViewWrapper";
import { DropdownSelect } from "../../../components/Dropdown";

export default function FlightQuestion() {
  const { addAnswer, surveyData } = useSurveyContext();
  console.log(surveyData);

  return (
    <AviodKeyBoardViewWrapper>
      <View>
        <Text style={tw`font-semibold text-lg mb-3 text-mainColor`}>
          How many flight do you take yearly
        </Text>
        <View style={tw`flex gap-y-3 py-4 mb-3`}>
          <Text style={tw`text-base font-semibold text-mainColor`}>
            Round trip
          </Text>
          <View style={tw`flex flex-row items-center gap-x-2`}>
            <Text style={tw`w-1/2 text-base font-semibold text-dark`}>
              Domestic &#40;&#126;1 hours&#41;
            </Text>
            <View style={tw`w-1/3`}>
              <TextInput
                onChangeText={(text) =>
                  addAnswer({
                    ...surveyData,
                    flight: {
                      ...surveyData.flight,
                      withRf: {
                        ...surveyData.flight.withRf,
                        domestic: text,
                      },
                    },
                  })
                }
                keyboardType="numeric"
                placeholder="0"
                border={true}
              />
            </View>
          </View>
          <View style={tw`flex flex-row items-center gap-x-2`}>
            <Text style={tw`w-1/2 text-base font-semibold text-dark`}>
              Short haul &#40;&#126;2 hours&#41;
            </Text>
            <View style={tw`w-1/3`}>
              <TextInput
                onChangeText={(text) =>
                  addAnswer({
                    ...surveyData,
                    flight: {
                      ...surveyData.flight,
                      withRf: {
                        ...surveyData.flight.withRf,
                        shortHaul: text,
                      },
                    },
                  })
                }
                keyboardType="numeric"
                placeholder="0"
                border={true}
              />
            </View>
          </View>
          <View style={tw`flex flex-row items-center gap-x-2`}>
            <Text style={tw`w-1/2 text-base font-semibold text-dark`}>
              Long haul &#40;8+ hours&#41;
            </Text>
            <View style={tw`w-1/3`}>
              <TextInput
                onChangeText={(text) =>
                  addAnswer({
                    ...surveyData,
                    flight: {
                      ...surveyData.flight,
                      withRf: {
                        ...surveyData.flight.withRf,
                        longHaul: text,
                      },
                    },
                  })
                }
                keyboardType="numeric"
                placeholder="0"
                border={true}
              />
            </View>
          </View>
        </View>
        <View style={tw`flex gap-y-3 py-4 mb-3`}>
          <Text style={tw`text-base font-semibold text-mainColor`}>
            One way trip
          </Text>
          <View style={tw`flex flex-row items-center gap-x-2`}>
            <Text style={tw`w-1/2 text-base font-semibold text-dark`}>
              Domestic &#40;&#126;1 hours&#41;
            </Text>
            <View style={tw`w-1/3`}>
              <TextInput
                onChangeText={(text) =>
                  addAnswer({
                    ...surveyData,
                    flight: {
                      ...surveyData.flight,
                      withoutRf: {
                        ...surveyData.flight.withoutRf,
                        domestic: text,
                      },
                    },
                  })
                }
                keyboardType="numeric"
                placeholder="0"
                border={true}
              />
            </View>
          </View>
          <View style={tw`flex flex-row items-center gap-x-2`}>
            <Text style={tw`w-1/2 text-base font-semibold text-dark`}>
              Short haul &#40;&#126;2 hours&#41;
            </Text>
            <View style={tw`w-1/3`}>
              <TextInput
                onChangeText={(text) =>
                  addAnswer({
                    ...surveyData,
                    flight: {
                      ...surveyData.flight,
                      withoutRf: {
                        ...surveyData.flight.withoutRf,
                        shortHaul: text,
                      },
                    },
                  })
                }
                keyboardType="numeric"
                placeholder="0"
                border={true}
              />
            </View>
          </View>
          <View style={tw`flex flex-row items-center gap-x-2`}>
            <Text style={tw`w-1/2 text-base font-semibold text-dark`}>
              Long haul &#40;8+ hours&#41;
            </Text>
            <View style={tw`w-1/3`}>
              <TextInput
                onChangeText={(text) =>
                  addAnswer({
                    ...surveyData,
                    flight: {
                      ...surveyData.flight,
                      withoutRf: {
                        ...surveyData.flight.withoutRf,
                        longHaul: text,
                      },
                    },
                  })
                }
                keyboardType="numeric"
                placeholder="0"
                border={true}
              />
            </View>
          </View>
        </View>
      </View>
    </AviodKeyBoardViewWrapper>
  );
}

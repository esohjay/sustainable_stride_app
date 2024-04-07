import { View, Text, Image } from "react-native";
import AviodKeyBoardViewWrapper from "../components/AviodKeyBoardViewWrapper";
import tw from "../lib/tailwind";
import { CustomScrollView } from "../context/providers/ScrollContext";
import { Button } from "../components/UI/Button";
import HouseholdWrapper from "../components/Survey/household/HouseholdWrapper";

function SurveyScreen() {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <CustomScrollView style={tw`bg-gray-50`} screen="survey">
      <AviodKeyBoardViewWrapper>
        <View style={tw`w-full`}>
          <HouseholdWrapper
          // control={control}
          // Controller={Controller}
          // errors={errors}
          // setValue={setValue}
          />
        </View>
      </AviodKeyBoardViewWrapper>
    </CustomScrollView>
  );
}

export default SurveyScreen;

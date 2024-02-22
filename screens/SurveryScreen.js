import { View, Text, Image } from "react-native";
import HomeSection from "../components/Survey/Home";
import AviodKeyBoardViewWrapper from "../components/AviodKeyBoardViewWrapper";
import { useForm, Controller } from "react-hook-form";
import tw from "../lib/tailwind";
import { CustomScrollView } from "../context/providers/ScrollContext";
import { Button } from "../components/UI/Button";

function SurveyScreen() {
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <CustomScrollView style={tw`bg-gray-50`} screen="survey">
      <AviodKeyBoardViewWrapper>
        <View style={tw`w-full`}>
          <HomeSection
            control={control}
            Controller={Controller}
            errors={errors}
            setValue={setValue}
          />
        </View>
      </AviodKeyBoardViewWrapper>
    </CustomScrollView>
  );
}

export default SurveyScreen;

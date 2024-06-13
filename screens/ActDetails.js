import React, { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import tw from "../lib/tailwind";
import BackButton from "../components/BackButton";
import { useActionActions } from "../context/actions/action_actions";
import { useActionContext } from "../context/providers/ActionProvider";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Badge } from "../components/Badge";
import { Button } from "../components/UI/Button";
import { getGoal } from "../lib/getSdg";
import SdgCard from "../components/SdgCard";
import { RESET_ACTION_LOGGINNG } from "../context/constants/action_constants";
import { useNavigation } from "@react-navigation/native";

export default function ActDetails({ route, navigation }) {
  const navigate = useNavigation();
  const insets = useSafeAreaInsets();
  const { actionId } = route.params;
  const [action, setAction] = useState(null);
  const { getActions, logAction } = useActionActions();
  const { state, dispatch } = useActionContext();
  useEffect(() => {
    if (!state.actionList) {
      getActions();
    }
  }, [state.actionList]);

  useEffect(() => {
    if (state.actionList) {
      const actionDetails = state.actionList.find(
        (action) => action.id === actionId
      );
      setAction(actionDetails);
    }
  }, [state.actionList]);
  useEffect(() => {
    if (state.actionAdded) {
      const timeoutId = setTimeout(() => {
        dispatch({ type: RESET_ACTION_LOGGINNG });
        navigation.goBack();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [state.actionAdded]);

  return (
    <ScrollView style={tw`bg-gray-50 py-3 min-h-screen`}>
      <View
        style={tw`relative pt-[${insets.top}] pb-[${insets.bottom}] px-5 bg-white rounded-b-3xl shadow-md`}
      >
        <BackButton />
        <View style={tw`w-full absolute left-5  -bottom-7 flex items-center`}>
          <View
            style={tw`flex h-16 w-16 p-1 justify-center shadow-md shadow-white items-center  bg-[#0d47a1] rounded-full`}
          >
            <View
              style={tw`flex flex-row gap-x-1 border border-white w-full h-full items-center justify-center rounded-full`}
            >
              <Ionicons name={"trophy"} size={16} color="#ffffff" />
              <Text style={tw`text-white font-semibold`}>{action?.point}</Text>
            </View>
          </View>
        </View>
        <View style={tw`pt-5 pb-8 flex gap-5 items-center mb-2`}>
          <Text
            style={tw`font-thick capitalize text-mainColor text-center text-lg`}
          >
            {action?.title}
          </Text>
          <Badge
            text={action?.category}
            variant="success"
            textStyle={tw`capitalize`}
          />
          <Text style={tw`font-medium text-justify text-dark text-sm mb-2`}>
            {action?.description}
          </Text>
        </View>
      </View>
      <View style={tw`px-5 mt-16`}>
        {state.actionAdded && (
          <Text style={tw`my-2 text-sm text-green-500`}>Action logged!</Text>
        )}
        <View style={tw` bg-mainColor p-4 shadow-md rounded-lg`}>
          <Text style={tw`font-semibold mb-2 text-primaryLight`}>
            By taking this action, you are saving
          </Text>
          <View
            style={tw`flex flex-row gap-x-1 py-1 justify-center items-center px-2 bg-primaryLight w-[120px] rounded-full`}
          >
            <Ionicons name={"cloud-download"} size={16} color="green" />
            <Text style={tw`text-green-800 font-semibold`}>
              <Text style={tw`text-sm `}> {action?.emission}kgC0</Text>
              <Text style={tw`text-xs `}>2</Text>
            </Text>
          </View>
          <View style={tw`w-full flex flex-row justify-end pt-4`}>
            <View style={tw` max-w-2/3`}>
              <Button
                style={tw`text-[9px] px-4`}
                height="38"
                text={"log action"}
                icon={"cloud-download"}
                isLoading={state.addingAction}
                onPress={() => logAction(action)}
                variant="light"
              />
            </View>
          </View>
        </View>
        <View style={tw`flex gap-5 my-6`}>
          <Text style={tw`font-bold text-lg text-center text-mainColor`}>
            Sustainable Development Goals
          </Text>
          <Text style={tw`font-medium text-center text-sm text-dark`}>
            These action relates to the following United Nations Developemnt
            Goals. By completing this action, you're contributing to the
            acomplishment of the SDGs.
          </Text>
          <View style={tw`flex gap-5`}>
            {action?.sdg?.map((sdgNumber) => {
              const sdg = getGoal(sdgNumber);
              return <SdgCard key={sdg.goal} data={sdg} />;
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

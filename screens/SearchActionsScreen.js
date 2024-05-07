import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, FlatList } from "react-native";
import tw from "../lib/tailwind";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../components/UI/Button";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { useActionActions } from "../context/actions/action_actions";
import { useActionContext } from "../context/providers/ActionProvider";
import ActionCard from "../components/ActionCard";
import ActionList from "../components/ActionList";
import BackButton from "../components/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TextInput } from "../components/UI/TextInput";

export default function SearchAction() {
  const insets = useSafeAreaInsets();
  const { getActions } = useActionActions();
  const { state } = useActionContext();
  const [filteredActions, setFilteredActions] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      action: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const findAction = (query) => {
    console.log(query);
    if (!query) return setFilteredActions([]);

    const result = state?.actionList?.filter((action) => {
      return action.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredActions(result);
    setRefresh(!refresh);
  };

  //delay finding of schools as user type
  const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };
  const optimizedFn = useCallback(debounce(findAction), []);
  // console.log(filteredActions);
  // console.log(state?.actionList);
  useEffect(() => {
    if (!state.actionList) {
      getActions();
    }
  }, [state.actionList]);
  return (
    <View
      style={tw`relative pt-[${insets.top}] flex flex-1 pb-[${insets.bottom}] px-5 bg-white rounded-b-3xl shadow-md`}
    >
      <BackButton />
      <View style={tw`h-full  py-2`}>
        <Text style={tw`font-semibold text-base mb-2 text-mainColor`}>
          Search actions
        </Text>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={(e) => optimizedFn(e)}
                // value={value}
                autoFocus={true}
                style={tw`p-3 border rounded-lg mb-3`}
                placeholder="Enter atleast 3 letters"
              />
            )}
            name="action"
          />
          {errors.action && (
            <Text style={tw`mt-1 text-sm text-red-500`}>
              action is required
            </Text>
          )}
        </View>

        <View style={tw`flex flex-1  py-3`}>
          <FlatList
            data={filteredActions}
            extraData={filteredActions.length}
            ItemSeparatorComponent={() => (
              <View style={{ height: 10, width: 8 }}></View>
            )}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return <ActionCard data={item} isFullWidth={true} />;
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}

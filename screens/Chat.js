import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomScrollView } from "../context/providers/ScrollContext";
import { useAuthContext } from "../context/providers/AuthProvider";
import tw from "../lib/tailwind";
import {
  View,
  Text,
  Pressable,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { db } from "../lib/firebaseConfig";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";
import { useCampaignActions } from "../context/actions/campaign_actions";
import { TextInput } from "../components/UI/TextInput";
import { Button } from "../components/UI/Button";
import { useForm, Controller } from "react-hook-form";
import AviodKeyBoardViewWrapper from "../components/AviodKeyBoardViewWrapper";

export default function Chat({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { state: userState } = useAuthContext();
  const { sendMessage } = useCampaignActions();
  const { title, campaignId } = route.params;
  const [messages, setMessages] = useState("");
  // const [message, setMessage] = useState('')
  const splitTitle = title.split(" ");
  const abbrev =
    splitTitle.length > 2
      ? `${splitTitle[0].charAt(0)}${splitTitle[1].charAt(0)}`
      : `${splitTitle[0].charAt(0)}${splitTitle[0].charAt(1)}`;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      message: "",
    },
  });
  const onSubmit = (data) => {
    sendMessage({ ...data, id: campaignId });
    reset();
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={tw`w-9 h-9 rounded-full flex justify-center items-center bg-transparent bg-dark`}
        >
          <Text style={tw`text-base font-thick uppercase text-primaryLight`}>
            {abbrev}
          </Text>
        </View>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const q = query(
      collection(db, "campaign", campaignId, "messages"),
      orderBy("timestamp")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        messageId: doc.id,
      }));
      setMessages(fetchedMessages);
    });
    return () => unsubscribe();
  }, []);
  console.log(messages);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={90}
      style={tw`bg-gray-50 px-5 flex-1`}
    >
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={tw``}> */}
      <View style={tw`w-full h-full pb-[${insets.bottom}]`}>
        <View style={tw`relative pt-2 h-full`}>
          <View style={tw`h-[90%]`}>
            <FlatList
              data={messages}
              ItemSeparatorComponent={() => (
                <View style={{ height: 10, width: 8 }}></View>
              )}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <View
                    style={tw`flex flex-row  ${
                      item.sender.id === userState?.user?.id
                        ? "justify-end"
                        : "justify-start"
                    }
                    `}
                  >
                    <View
                      style={tw`rounded-full px-3  py-2 ${
                        item.sender.id !== userState?.user?.id
                          ? "bg-mainColor text-primaryLight"
                          : "text-mainColor bg-white"
                      }`}
                    >
                      <Text
                        style={tw`rounded-full font-medium  ${
                          item.sender.id !== userState?.user?.id
                            ? " text-primaryLight"
                            : "text-mainColor "
                        } `}
                      >
                        {item.message}
                      </Text>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item) => item.messageId}
            />
          </View>
          <View
            style={tw`flex h-[10%] bg-gray-50 flex-row justify-between items-center gap-x-2 `}
          >
            <View style={tw`w-[90%]`}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    border={true}
                    // icon="mail"
                    // multiline={true}
                    placeholder="type message.."
                    // label={"Email"}
                  />
                )}
                name="message"
              />
            </View>
            {/* {errors.message && (
              <Text style={tw`mt-1 text-sm text-red-500`}>type a message</Text>
            )} */}

            <Pressable onPress={handleSubmit(onSubmit)} style={tw`w-[10%]`}>
              <Ionicons name={"send"} size={24} color="#7d4f50" />
            </Pressable>
          </View>
        </View>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
}

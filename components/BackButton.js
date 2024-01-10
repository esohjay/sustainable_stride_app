import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function BackButton() {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Ionicons name={"arrow-back-outline"} size={24} color="#7d4f50" />
    </Pressable>
  );
}

export default BackButton;

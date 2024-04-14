import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function useSurveyNextPage() {
  const navigate = useNavigation();
  const nextScreen = (screenName) => navigate.navigate(screenName);
  return nextScreen;
}

import React from "react";
import { Alert, Share, View, Button } from "react-native";

export default function useShareHandler() {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(result.activityType, "activity type");
          // shared with activity type of result.activityType
          console.log(result.action, "action");
        } else {
          // shared
          console.log(result.activityType, "activity type", "else");
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return onShare;
}

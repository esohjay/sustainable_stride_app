import React from "react";
import { View, Text } from "react-native";
import tw from "../lib/tailwind";

export const Badge = ({ variant = "default", text, style, ...props }) => {
  const variants = {
    default: {
      container: tw`bg-gray-100`,
      text: tw`text-gray-900`,
    },
    success: {
      container: tw`bg-green-50`,
      text: tw`text-green-700`,
    },
    blue: {
      container: tw`bg-blue-50`,
      text: tw`text-blue-700`,
    },
    destructive: {
      container: tw`bg-red-700`,
      text: tw`text-red-50`,
    },
  };

  return (
    <View
      {...props}
      style={[
        tw`h-6 px-3 justify-center rounded-lg`,
        variants[variant].container,
        style,
      ]}
    >
      <Text style={[tw`text-xs font-bold`, variants[variant].text]}>
        {text}
      </Text>
    </View>
  );
};

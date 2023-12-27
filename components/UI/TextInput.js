import { useState } from "react";
import { TextInput as DefaultTextInput, View, Text } from "react-native";
import tw from "../../lib/tailwind";
import { Ionicons } from "@expo/vector-icons";

/**
 * React Native text input component built with Tailwind CSS
 */
export const TextInput = ({
  placeholderTextColor,
  icon,
  label,
  isPassowrd,
  isPassowrdField = false,
  showPassword,
  setShowPassword,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleEndEditing = () => {
    setIsFocused(false);
  };

  return (
    <View style={tw`flex w-full shrink`}>
      <Text style={tw`mb-2 text-dark font-semibold`}>{label}</Text>
      <View style={tw`flex flex-row items-center bg-white rounded-md pr-2`}>
        <View
          style={tw`flex items-center flex-row gap-x-2 bg-white border-gray-200 rounded-md h-12 px-3 shrink`}
        >
          {icon && (
            <View style={tw`w-[8%]`}>
              <Ionicons name={icon} size={24} color="#7d4f50" />
            </View>
          )}
          <DefaultTextInput
            {...props}
            onFocus={handleFocus}
            secureTextEntry={isPassowrdField && !showPassword}
            onEndEditing={handleEndEditing}
            style={[
              tw`${icon ? "w-[92%]" : "w-full"} h-full text-dark`,
              // isFocused ? tw`border-none` : {},
              props.style,
            ]}
            placeholderTextColor={
              placeholderTextColor || tw.color("text-gray-300")
            }
          />
        </View>
        {isPassowrd && (
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#7d4f50"
            onPress={() => setShowPassword(!showPassword)}
            style={tw``}
          />
        )}
      </View>
    </View>
  );
};

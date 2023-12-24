import { useState } from "react";
import { TextInput as DefaultTextInput } from "react-native";
import tw from "../../lib/tailwind";

/**
 * React Native text input component built with Tailwind CSS
 */
export const TextInput = ({ placeholderTextColor, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleEndEditing = () => {
    setIsFocused(false);
  };

  return (
    <DefaultTextInput
      {...props}
      onFocus={handleFocus}
      onEndEditing={handleEndEditing}
      style={[
        tw`w-full bg-white border-gray-200 rounded-md h-12 px-4`,
        // isFocused ? tw`border-none` : {},
        props.style,
      ]}
      placeholderTextColor={placeholderTextColor || tw.color("text-dark")}
    />
  );
};

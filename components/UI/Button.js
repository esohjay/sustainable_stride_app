import { useState } from "react";
import { Pressable, Text, ViewStyle } from "react-native";

import tw from "../../lib/tailwind";

/**
 * React Native button component built with Tailwind CSS
 */
export const Button = ({
  text,
  icon,
  variant = "default",
  style = "",
  textStyle = "",
  iconStyle = "",
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const variants = {
    default: {
      bg: tw`bg-mainColor dark:bg-mainColor`,
      hover: tw`bg-secondaryColor dark:bg-gray-200`,
      text: tw`text-altColor dark:text-gray-900`,
    },
    light: {
      text: tw`text-mainColor dark:bg-mainColor`,
      hover: tw`bg-secondaryColor dark:bg-gray-200`,
      bg: tw`bg-altColor dark:text-gray-900`,
    },
    success: {
      bg: tw`bg-green-700`,
      hover: tw`bg-green-800`,
      text: tw`text-green-50`,
    },
    destructive: {
      bg: tw`bg-red-700`,
      hover: tw`bg-red-800`,
      text: tw`text-red-50`,
    },
  };

  return (
    <Pressable
      {...props}
      onHoverIn={() => setHovered(true)}
      android_ripple={tw`text-secondaryColor`}
      onHoverOut={() => setHovered(false)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        tw` min-h-[40px] px-4 flex-row gap-2 items-center justify-center rounded-md`,
        variants[variant].bg,
        hovered || pressed ? variants[variant].hover : null,
        // todo: fix ts error
        style,
      ]}
    >
      {icon ? icon([tw`text-lg`, variants[variant].text, iconStyle]) : null}
      {text ? (
        <Text
          style={[
            tw`font-bold`,

            variants[variant].text,
            textStyle,
            { textTransform: "uppercase" },
          ]}
        >
          {text}
        </Text>
      ) : null}
    </Pressable>
  );
};

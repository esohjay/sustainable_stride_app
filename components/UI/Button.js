import { useState } from "react";
import { Pressable, Text, ActivityIndicator } from "react-native";

import tw from "../../lib/tailwind";

/**
 * React Native button component built with Tailwind CSS
 */
export const Button = ({
  text,
  onPress,
  icon,
  variant = "default",
  style = "",
  textStyle = "",
  iconStyle = "",
  isLoading = false,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const variants = {
    default: {
      bg: tw`bg-mainColor dark:bg-mainColor shadow-sm shadow-mainColor`,
      hover: tw`bg-secondaryColor dark:bg-gray-200`,
      text: tw`text-altColor `,
    },
    light: {
      text: tw`text-mainColor `,
      hover: tw`bg-secondaryColor`,
      bg: tw`bg-altColor  shadow-sm shadow-mainColor`,
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
      onPress={onPress}
      onHoverOut={() => setHovered(false)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        tw` min-h-[40px] px-4 flex flex-row gap-2 items-center justify-center rounded-md`,
        variants[variant].bg,
        hovered || pressed ? variants[variant].hover : null,
        // todo: fix ts error
        style,
      ]}
    >
      {icon ? icon([tw`text-lg`, variants[variant].text, iconStyle]) : null}

      {text ? (
        <>
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
          {isLoading && (
            <ActivityIndicator
              animating={isLoading}
              color="#FFFFFF"
              size="small"
              // style={styles.activityIndicator}
            />
          )}
        </>
      ) : null}
    </Pressable>
  );
};

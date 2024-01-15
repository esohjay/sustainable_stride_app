import { View } from "react-native";
import tw from "../lib/tailwind";

export const ProgressBar = ({
  variant = "success",
  progress,
  containerStyle,
  barStyle,
}) => {
  const variants = {
    default: tw`bg-blue-400`,
    success: tw`bg-emerald-400`,
    destructive: tw`bg-red-400`,
    warning: tw`bg-amber-400`,
  };

  const getWidth = () => {
    if (progress > 100) {
      return "100%";
    }

    if (progress < 0) {
      return "0%";
    }

    return `${progress}%`;
  };

  return (
    <View style={[tw`h-[6px] bg-gray-200 rounded-full w-full`, containerStyle]}>
      <View
        style={[
          tw`h-[6px] rounded-full`,
          variants[variant],
          barStyle,
          { width: getWidth() },
        ]}
      />
    </View>
  );
};

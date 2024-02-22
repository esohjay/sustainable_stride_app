import { useState } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { TextInput } from "../UI/TextInput";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../UI/Button";
import tw from "../../lib/tailwind";

const { width } = Dimensions.get("screen");
const withPadding = width - 20;
export default function HomeSection({ Controller, control, errors, setValue }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const onSlideChange = (nativeEvent) => {
    if (nativeEvent) {
      // divide screen width by the number of x offset
      const slide = Math.floor(
        Math.floor(nativeEvent.contentOffset.x) / Math.floor(width)
      );
      if (slide !== activeImageIndex) {
        setActiveImageIndex(slide);
      }
    }
  };
  return (
    <View style={tw`p-5`}>
      {/* Heading */}
      <View style={tw`flex gap-y-2`}>
        <View style={tw`flex flex-row items-center gap-x-2`}>
          <View
            style={tw`flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 p-2`}
          >
            <Ionicons name="home-outline" size={24} color="white" />
          </View>
          <View style={tw`flex flex-row gap-x-5 items-center`}>
            <Text style={tw`font-bold capitalize text-dark text-xl`}>
              Household
            </Text>
            <Text style={tw`font-bold capitalize text-dark text-xl`}>
              1 of 3
            </Text>
          </View>
        </View>
        <View style={tw`w-full flex flex-row bg-gray-300 p-[2px] rounded-full`}>
          <View style={tw` w-1/3  bg-blue-500 h-1 rounded-md`}></View>
          <View style={tw` w-1/3 bg-blue-500 h-1 rounded-md`}></View>
          <View style={tw` w-1/3 bg-blue-500 h-1 rounded-md`}></View>
        </View>
      </View>
      {/* Form */}
      <View>
        <View style={tw`w-[${width}px]`}>
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
                icon="lock-closed"
                placeholder="xxxxxxxx"
                label={"Password 1"}
                // isPassowrd={true}
                // isPassowrdField={true}
                // showPassword={showPassword}
                // setShowPassword={setShowPassword}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={tw`mt-1 text-sm text-red-500`}>
              Password is required
            </Text>
          )}
        </View>
        <View style={tw`w-[${width}px]`}>
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
                icon="lock-closed"
                placeholder="xxxxxxxx"
                label={"Password 2"}
                // isPassowrd={true}
                // isPassowrdField={true}
                // showPassword={showPassword}
                // setShowPassword={setShowPassword}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={tw`mt-1 text-sm text-red-500`}>
              Password is required
            </Text>
          )}
        </View>
        <View style={tw`w-[${width}px]`}>
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
                icon="lock-closed"
                placeholder="xxxxxxxx"
                label={"Password"}
                // isPassowrd={true}
                // isPassowrdField={true}
                // showPassword={showPassword}
                // setShowPassword={setShowPassword}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={tw`mt-1 text-sm text-red-500`}>
              Password is required
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

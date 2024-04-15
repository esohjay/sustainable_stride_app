import React, { useState } from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import tw from "../lib/tailwind";

export const DropdownSelect = ({
  options,
  onSelect,
  value,
  placeholder = "Unit",
  onSelectArg = "",
}) => {
  //   const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  //   const renderLabel = () => {
  //     if (value || isFocus) {
  //       return (
  //         <Text style={[styles.label, isFocus && { color: "blue" }]}>
  //           Dropdown label
  //         </Text>
  //       );
  //     }
  //     return null;
  //   };

  return (
    <View>
      {/* {renderLabel()} */}
      <Dropdown
        style={[
          tw`h-12 px-2 border border-gray-200 rounded-md`,
          isFocus && tw`border-gray-200`,
        ]}
        placeholderStyle={tw`text-base`}
        selectedTextStyle={tw`text-base`}
        data={options}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          //   setValue(item.value);
          if (onSelectArg) {
            onSelect(onSelectArg, item.value);
          } else {
            onSelect(item.value);
          }
          setIsFocus(false);
        }}
      />
    </View>
  );
};

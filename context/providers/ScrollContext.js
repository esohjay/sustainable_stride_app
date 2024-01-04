import React, { useState } from "react";
import { ScrollView as ScrollViewNative } from "react-native";

const withinLimits = (val, min, max) =>
  val > max ? max : val < min ? min : val;

export const ScrollContext = React.createContext({
  opacity: 0,
  maxOffset: 0,
  offset: 0,
  titleShowing: false,
  updateOffset: (val) => {},
});

export const useScroller = () => React.useContext(ScrollContext);

export const ScrollContextProvider = (props) => {
  const minOffset = 0;
  const maxOffset = 30;

  const [offset, setOffset] = useState(0);
  const [titleShowing, setTitleShowing] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const updateOffset = (val) => {
    setOffset(withinLimits(val, minOffset, maxOffset));
    setTitleShowing(val > maxOffset);
    setOpacity(withinLimits((val * maxOffset) / 1000, 0, 1));
  };

  return (
    <ScrollContext.Provider
      value={{
        opacity: opacity,
        maxOffset: maxOffset,
        offset: offset,
        titleShowing: titleShowing,
        updateOffset: updateOffset,
      }}
    >
      {props.children}
    </ScrollContext.Provider>
  );
};

export const CustomScrollView = (props) => {
  const { updateOffset } = useScroller();

  return (
    <ScrollViewNative
      {...props}
      onScroll={({ nativeEvent }) => {
        updateOffset(nativeEvent.contentOffset.y);
      }}
      scrollEventThrottle={200}
    >
      {props.children}
    </ScrollViewNative>
  );
};

export default ScrollContextProvider;

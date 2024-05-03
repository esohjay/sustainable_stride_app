import React from "react";
import tw from "../lib/tailwind";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export default function TrackModal({
  trackRef,
  snapPoints,
  bg = "white",
  index = 0,
  children,
}) {
  return (
    <BottomSheetModal
      ref={trackRef}
      index={index}
      snapPoints={snapPoints}
      backgroundStyle={{ borderRadius: 25, backgroundColor: bg }}
      style={tw`shadow-lg bg-white rounded-3xl`}
    >
      {children}
    </BottomSheetModal>
  );
}

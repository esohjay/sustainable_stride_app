import React from "react";
import tw from "../lib/tailwind";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export default function TrackModal({ trackRef, snapPoints, children }) {
  return (
    <BottomSheetModal
      ref={trackRef}
      snapPoints={snapPoints}
      backgroundStyle={{ borderRadius: 25 }}
      style={tw`shadow-lg bg-white rounded-3xl`}
    >
      {children}
    </BottomSheetModal>
  );
}

import React from "react";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import tw from "../../lib/tailwind";

export default function CampaignRoundSkeleton({ loadingState }) {
  return (
    <MotiView
      transition={{
        type: "timing",
      }}
      style={tw`bg-white p-4 rounded-md shadow my-3 flex flex-row justify-evenly gap-x-2 items-center`}
    >
      <Skeleton
        colorMode="light"
        show={loadingState}
        radius={"round"}
        height={80}
        width={80}
      />
      <Skeleton
        colorMode="light"
        show={loadingState}
        radius={"round"}
        height={80}
        width={80}
      />
      <Skeleton
        colorMode="light"
        show={loadingState}
        radius={"round"}
        height={80}
        width={80}
      />
    </MotiView>
  );
}

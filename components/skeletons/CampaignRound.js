import React from "react";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import tw from "../../lib/tailwind";

const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />;

export default function CampaignRoundSkeleton({ loadingState }) {
  return (
    <MotiView
      transition={{
        type: "timing",
      }}
      style={tw`bg-white p-4 rounded-md shadow my-3 flex  gap-x-2 items-center`}
    >
      <Skeleton.Group show={loadingState}>
        <Skeleton colorMode="light" radius={"round"} height={80} width={80} />
        <Spacer />
        <Skeleton colorMode="light" height={13} width={150} />
        <Spacer height={8} />
      </Skeleton.Group>
      <Skeleton.Group show={loadingState}>
        <Skeleton colorMode="light" radius={"round"} height={80} width={80} />
        <Spacer />
        <Skeleton colorMode="light" height={13} width={150} />
        <Spacer height={8} />
      </Skeleton.Group>
      <Skeleton.Group show={loadingState}>
        <Skeleton colorMode="light" radius={"round"} height={80} width={80} />
        <Spacer />
        <Skeleton colorMode="light" height={13} width={150} />
        <Spacer height={8} />
      </Skeleton.Group>
    </MotiView>
  );
}
